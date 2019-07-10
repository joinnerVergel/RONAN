let profile = "prod";

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// AUTHENTICATION
export const mf_getAuthentication = profile == "dev" ? 'http://localhost:55256/Identificacion.svc/identificarCuenta':'https://nlbevolution/WCF_RONAN/Identificacion.svc/identificarCuenta';
export const mf_cleanAuthentication = profile == "dev" ? 'http://localhost:55256/Identificacion.svc/UsuarioLogout':'https://nlbevolution/WCF_RONAN/Identificacion.svc/UsuarioLogout';

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// REASONNOTPAYMENT
export const mf_getReasonNotPayment = profile == "dev" ? 'http://localhost:55256/MotivosNoPago.svc/ListarMotivosNoPago':'https://nlbevolution/WCF_RONAN/MotivosNoPago.svc/ListarMotivosNoPago';

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// OPTIONAGREEMENT
export const mf_getMaxDayAgreement = profile == "dev" ? 'http://localhost:55256/MotivosNoPago.svc/MaximoDiasAcuerdo':'https://nlbevolution/WCF_RONAN/MotivosNoPago.svc/MaximoDiasAcuerdo';

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// DISCOUNT
export const mf_getDiscounts = profile == "dev" ? 'http://localhost:55256/GestionDescuentosDispopnibles.svc/ObtenerDescuentoAplicable':'https://nlbevolution/WCF_RONAN/GestionDescuentosDispopnibles.svc/ObtenerDescuentoAplicable';

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// SAVE AGREEMENT
export const mf_setAgreement = profile == "dev" ? 'http://localhost:55256/AcuerdosPagoService.svc/ValidarAcuerdoDePago':'https://nlbevolution/WCF_RONAN/AcuerdosPagoService.svc/ValidarAcuerdoDePago';


export const urlMiddleLayer = profile == "dev" ? 'http://localhost:51770/api/Values':'https://e2e.movistar.com.co/MiddleLayerCasasDeCobro/api/Values';

