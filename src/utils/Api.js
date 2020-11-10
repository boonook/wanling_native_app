let Request_url = 'http://www.dahaikj.com';
if (global.__DEV__) {
    Request_url = 'http://159.138.139.36:7878';
}else{
    Request_url = 'http://159.138.139.36:7878';
}
const Api = {
    Request_url,
    baseUrlImg:'http://159.138.139.36:7878/'
};
export default Api;
