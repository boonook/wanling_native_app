let Request_url = 'http://www.dahaikj.com';
if (global.__DEV__) {
    Request_url = 'http://159.138.53.224:9898';
}else{
    Request_url = 'http://159.138.53.224:9898';
}
const Api = {
    Request_url,
    baseUrlImg:'https://cdn.zyhssp.com/'
};
export default Api;
