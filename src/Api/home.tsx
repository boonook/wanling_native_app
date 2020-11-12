import Request from "@/utils/Request";
export const getNewList = (params) => {
    return Request.http({
        method:'POST',
        url:'/wlapi/notice/list',
        params:params,
        formData:false,
        token:true
    })
};

export const getNewListDetail = (params) => {
    return Request.http({
        method:'POST',
        url:'/wlapi/notice/getDetail',
        params:params,
        formData:false,
        token:true
    })
};

