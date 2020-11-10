import Request from "@/utils/Request";
export const Login = (params) => {
    return Request.http({
        method:'POST',
        url:'/wlapi/login/login',
        params:params,
        formData:false,
        token:false
    })
};

export const getCode = (params) => {
    return Request.http({
        method:'POST',
        url:'/wlapi/login/getRegisterVerificationCode',
        params:params,
        formData:false,
        token:false
    })
};

export const registered = (params) => {
    return Request.http({
        method:'POST',
        url:'/wlapi/login/registered',
        params:params,
        formData:false,
        token:false
    })
};

export const resetPassword = (params) => {
    return Request.http({
        method:'POST',
        url:'/wlapi/login/resetPassword',
        params:params,
        formData:false,
        token:false
    })
};
