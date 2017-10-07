import { HttpService } from './service/http.service';
import { StorageService } from './service/storage.service';
import { BaseService } from './service/base.service';
import { AuthenticationGaurd } from './service/authentication.gaurd';
import { ModalService } from './modal/modal.service';

import { BaseRequest } from './request/baserequest';
import { HomeRequest } from './request/home.request';
import { LoginRequest } from './request/login.request';
import { PartyDetailRequest } from './request/partydetail.request';
import { ResendRequest } from './request/resend.request';
import { VerifyRequest } from './request/verify.request';
import { BookingHistoryRequest } from './request/bookingHistory.request';

const services = [
  AuthenticationGaurd,
  StorageService,
  ModalService,
  BaseService,
  HttpService
];

const apis = [
  BaseRequest,
  HomeRequest,
  LoginRequest,
  PartyDetailRequest,
  ResendRequest,
  VerifyRequest,
  BookingHistoryRequest
];

export {
  services,
  apis
}
