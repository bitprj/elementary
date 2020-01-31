import axios from 'axios'

export const STORE_DATA = 'STORE_DATA'
const storeData = (value) => ({type: STORE_DATA, value})

export const passingData = (value) => dispatch => {
    console.log(value)
    dispatch(storeData(value))
}