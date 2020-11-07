import Request from "@/utils/Request";
export const Login = (params) => {
    return Request.http({
        method:'POST',
        url:'/tg/login/enter',
        params:params,
        formData:false,
        token:false
    })
};
