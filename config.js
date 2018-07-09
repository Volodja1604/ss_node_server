if(process.argv[2]){
   hostname=process.argv[2];
}else if(process.env.NODE_ADDRESS)  {
    hostname=process.env.NODE_ADDRESS;
}
else {hostname='localhost'}
if(process.argv[3]){
   port=process.argv[3];
}else if(process.env.PORT){
    port=process.env.PORT;
} else {
    port=8000;
}
exports.port=port;
exports.hostname=hostname;