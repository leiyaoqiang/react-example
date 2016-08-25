/**
 * 记录日志
 * 记录所有被发起的 action 和 更新的 state
 */

const logger = store => next => action => {
	console.group(action.type);
	console.info('dispatching', action);
	let result = next(action);
	console.log('next state ', store.getState());
	console.groupEnd(action.type);

	return result;
}

/**
 * 崩溃报告
 * 在 state 更新完成或 linsenter 被通知后发送崩溃报告
 */

const crashReport = store => next => action => {
	try {
		return next(action)
	} catch (err) {
		console.error('Caught an exception! ', error);
		Raven.captureExcption(err, {
			extra: {
				action,
				state: store.getState()
			}
		});
		throw err;
	}
}

/**
 * 通过 {meta: { delay: N } } 让 action 延迟 N 毫秒
 * 在这个案例中，让 'dispatch' 返回一个取消 timeout 的函数
 */

const timeoutScheduler = store => next => action => {
	if (!action.meta || !action.meta.delay) {
		return next(action)
	}

	let timeoutId = setTimeout(
		() => next(action),
		action.meta.N
	)

	return function cancel () {
		clearTimeout(timeoutId);
	}
}

/**
 * 通过 {meta: { raf: true } } 让 action 在一个 rAF 循环侦中被发起。
 * 在这个案例中，让 'dispatch' 返回一个从队列中移除该 action 函数。
 */

const rafScheduler = store => next => {
	let queuedActions = [];
	let frame = null;

	function loop () {
		frame = null;
		try {
			if (queuedActions.length) {
				next(queuedActions.shift());
			}
		} finally {
			maybeRaf();
		}
	}

	function maybeRaf () {
		if (queuedActions.length && !frame) {
			frame = requestAnimationFrame(loop);
		}
	}

	return action => {
		if (!action.meta || !action.meta.raf) {
			return next(action);
		}

		queuedActions.push(action);
		maybeRaf();

		return function cancel () {
			queuedActions = queuedActions.filter(a => a !== action);
		}
	}
}

/**
 * 使你除了 action 之外还可以发起 promise。
 * 如果这个 promise 被 resolve，它的结果将被作为 action 发起。
 * 这个 promise 会被 'dispatch' 返回，因此调用者可以处理 rejection。
 */

 const vanillaPromise = store => next => action => {
 	if (typeof action.then !== 'function') {
 		return next(action);
 	}

 	return Promise.resolve(action).then(store.dispatch);
 }

 /**
  * 让你发起一个带有 { promise } 属性的特殊 action
  * 这个 middleware 会在开始时发起一个 action ,并在这个 'promise' resolve时发起一个成功或失败的 action
  * 为了方便起见，'dispatch' 会返回这个 promise 让调用者可以等待。
  */

 const readyStatePromise = store => next => action => {
 	if (!action.promise) {
 		return next(action)
 	}

 	function makeAction (ready, data) {
 		let newAction = Object.assign({}, action, { ready }, data);
 		delete newAction.promise;
 		return newAction;
 	}

 	next(mackAction(false));

 	return action.promise.then(
 		result => next(makeAction(true, { result })),
 		error => next(makeAction(true, { error }))
 	);
 }