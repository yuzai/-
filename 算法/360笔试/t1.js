var n = Number(read_line());
var sum  = 0;
var arr = [];
for(var i=0;i<n;i++){
      arr = read_line().replace(/\s+/g,' ').split(' ');
      sum += Number(arr[0])*Number(arr[1]);
}
print((sum/100).toFixed(3));