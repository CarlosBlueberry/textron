import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAwNzshKnJEkGWXLLqaMjg1h41EKmyUHU8",
    authDomain: "textron-878d8.firebaseapp.com",
    databaseURL: "https://textron-878d8-default-rtdb.firebaseio.com",
    projectId: "textron-878d8",
    storageBucket: "textron-878d8.appspot.com",
    messagingSenderId: "455185552122",
    appId: "1:455185552122:web:218a2062e2e966f5492f43",
    measurementId: "G-2C357H8DD4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const business_collection = db.collection('business')
const business_collection_order = db.collection('business').orderBy('created', 'desc')

const training_collection = db.collection('training')

const sharepoints_collection = db.collection('sharepoints')

// Success stories
const success_collection = db.collection('success').orderBy('created', 'desc')
const success_collection_post = db.collection('success')

// Master Plan
const master_plan = db.collection('master')
const procects_data = db.collection('projects')

// Xmatrix
const xmatrix_colection = db.collection('xmatrix')
const xmatrix_colectionorder = db.collection('xmatrix').orderBy('created', 'asc')
const xmatrix_colectiondesc = db.collection('xmatrix').orderBy('created', 'desc')

// Xconection
const xconection_colection = db.collection('xconections')

// Created 
const calculatedCreatedAt = firebase.firestore.FieldValue.serverTimestamp()

// VIsion
const vision_collection = db.collection('vision')

// Mision
const mision_collection = db.collection('mision')

// Enablers
const enablers_collection = db.collection('enablers')

// Values
const values_collection = db.collection('values')
const additional_collection = db.collection('additional')

// Principles
const principles_collection = db.collection('Principles')

// Supply
const supply_collection = db.collection('supply')

// Excel
const excelc_collection = db.collection('excel_category').orderBy('lugar', 'asc')
const excels_collection = db.collection('excel_subcategory').orderBy('order', 'asc')
const excel_collection_sub = db.collection('excel_subcategory')
const excec_results = db.collection('excel_results')

// ByExcel
const byexcelc_collection = db.collection('excel_bycategory').orderBy('lugar', 'asc')
const byexcels_collection = db.collection('excel_bysubcategory')
const byexcel_results = db.collection('byexcel_results')

export {
    firebase,
    business_collection,
    training_collection,
    sharepoints_collection,
    success_collection, success_collection_post,
    master_plan,
    procects_data,
    calculatedCreatedAt,
    xconection_colection,
    xmatrix_colection,
    xmatrix_colectionorder,
    xmatrix_colectiondesc,
    vision_collection,
    business_collection_order,
    enablers_collection,
    mision_collection,
    values_collection,
    additional_collection,
    principles_collection,
    supply_collection,
    excelc_collection,
    excels_collection,
    byexcelc_collection,
    byexcels_collection,
    excec_results,
    byexcel_results,
    excel_collection_sub
};
