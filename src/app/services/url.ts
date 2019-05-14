let profile = "prod";

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// AUTHENTICATION
export const mf_getAuthentication = profile == "dev" ? 'http://localhost:55256/Identificacion.svc/identificarCuenta':'https://10.80.2.89/WCF_RONAN/Identificacion.svc/identificarCuenta';
export const mf_cleanAuthentication = profile == "dev" ? 'http://localhost:55256/Identificacion.svc/UsuarioLogout':'https://10.80.2.89/WCF_RONAN/Identificacion.svc/UsuarioLogout';

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// REASONNOTPAYMENT
export const mf_getReasonNotPayment = profile == "dev" ? 'http://localhost:55256/MotivosNoPago.svc/ListarMotivosNoPago':'https://10.80.2.89/WCF_RONAN/MotivosNoPago.svc/ListarMotivosNoPago';

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// OPTIONAGREEMENT
export const mf_getMaxDayAgreement = profile == "dev" ? 'http://localhost:55256/MotivosNoPago.svc/MaximoDiasAcuerdo':'https://10.80.2.89/WCF_RONAN/MotivosNoPago.svc/MaximoDiasAcuerdo';

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// DISCOUNT
export const mf_getDiscounts = profile == "dev" ? 'http://localhost:55256/GestionDescuentosDispopnibles.svc/ObtenerDescuentoAplicable':'https://10.80.2.89/WCF_RONAN/GestionDescuentosDispopnibles.svc/ObtenerDescuentoAplicable';

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// SAVE AGREEMENT
export const mf_setAgreement = profile == "dev" ? 'http://localhost:55256/AcuerdosPagoService.svc/ValidarAcuerdoDePago':'https://10.80.2.89/WCF_RONAN/AcuerdosPagoService.svc/ValidarAcuerdoDePago';

