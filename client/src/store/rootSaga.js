import {all} from 'redux-saga/effects'
import taskSaga from './task/taskSaga'


export default function* (){
    yield all([taskSaga()])
}