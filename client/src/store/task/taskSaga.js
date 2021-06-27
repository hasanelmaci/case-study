import {takeEvery, all, call, put, takeLeading} from 'redux-saga/effects'
import {getTasks,addTask} from '../../utils/api'
import { GET_TASKS, ADD_TASK } from './taskTypes'
import {getTasksSuccess,getTasksFailed, addTaskSuccess, addTaskFailed} from './taskActions'

function* getTasksSaga(){
    try{
        const data = yield call(getTasks)
        yield put(getTasksSuccess(data))
    }catch(error){
        yield put(getTasksFailed(error));
        // console.log(error)
    }
}

function* getTasksWatcher(){
    yield takeEvery(GET_TASKS,getTasksSaga)
}

function* addTaskWatcher(){
    yield takeLeading(ADD_TASK,addTaskSaga)
}

function* addTaskSaga(action){
    try{
        const data = yield call(addTask,action.payload)
        yield put(addTaskSuccess({...action.payload,...data}))
    }catch(error){
        yield put(addTaskFailed(error))
    }
}

export default function* taskSaga(){
    yield all([getTasksWatcher(),addTaskWatcher()])
}