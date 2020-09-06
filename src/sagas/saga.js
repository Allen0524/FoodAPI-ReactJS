import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const getapi = () => {
    return  fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Kaohsiung?$top=10&$format=JSON')
        .then((res)=>{return res.json()})
        .then(data=>{return data})
}

function* fetchData(){
    const data = yield call(getapi);
    yield put({type: "GETDATA", payload:{data}})
}

function* mySaga(){
    yield takeEvery("FETCH_DATA", fetchData)
}

export default mySaga;