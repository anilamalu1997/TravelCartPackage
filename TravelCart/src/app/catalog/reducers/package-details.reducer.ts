import { state } from '@angular/animations';
import { createInput } from '@angular/compiler/src/core';
import { Action, createReducer, on } from '@ngrx/store';
import * as PackageDetailsActions from '../actions/package-details.actions';
import { Package } from '../models/package';
import { Review } from '../models/review';

export const packageDetailsFeatureKey = 'packageDetails';

export interface PackageDetailsState {


  isLoadingReviews: boolean;
  isLoadingPackage: boolean;
  isSavingReview: boolean;
  package : Package | null;
  reviews : Review[] ;
  
}

export const initialState: PackageDetailsState = {
  isLoadingReviews:false,
  isLoadingPackage:false,
  isSavingReview:false,
  package:null,
 reviews:[]
};

const loadPackageDetailss = (state: PackageDetailsState) => {
  return {...state, isLoadingPackage:true};
}

const loadPackageDetailssSuccess = (state: PackageDetailsState, payload : {package:Package | null}) => {

  return {...state,package: payload.package, isLoadingPackage:false};
}

const loadPackageDetailssFailure = (state: PackageDetailsState) => {
  return {...state,package:null, isLoadingPackage:true};
}



  
const loadPackageReviews = (state: PackageDetailsState) => {
  return {...state, isLoadingReviews:true};
}

const loadPackageReviewsSuccess = (state: PackageDetailsState, payload : {reviews:Review[]}) => {

  return {...state,reviews: payload.reviews, isLoadingReviews:false};
}

const loadPackageReviewsFailure = (state: PackageDetailsState) => {
  return {...state,package:null, isLoadingReviews:true};
}




  
const saveReview = (state: PackageDetailsState) => {
  return {...state, isSavingReview:true};
}

const saveReviewSuccess = (state: PackageDetailsState, payload : { review : Review | null }) => {

  return {...state, isSavingReview:false};
}

const saveReviewFailure = (state: PackageDetailsState) => {
  return {...state, isSavingReview:false};
}

export const reducer = createReducer(
  initialState,

on(PackageDetailsActions.loadPackageDetailss, loadPackageDetailss),
on(PackageDetailsActions.loadPackageDetailssSuccess, loadPackageDetailssSuccess),
on(PackageDetailsActions.loadPackageDetailssFailure, loadPackageDetailssFailure),

  
  on(PackageDetailsActions.loadPackageReviews, loadPackageReviews),
  on(PackageDetailsActions.loadPackageReviewsSuccess, loadPackageReviewsSuccess),
  on(PackageDetailsActions.loadPackageReviewsFailure, loadPackageReviewsFailure),


  
  on(PackageDetailsActions.saveReview, saveReview),
  on(PackageDetailsActions.saveReviewSuccess, saveReviewSuccess),
  on(PackageDetailsActions.saveReviewFailure, saveReviewFailure),


);
