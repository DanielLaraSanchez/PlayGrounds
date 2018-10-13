$(document).ready(function(){
  function myfunction(){
  let url = "../file.xlsx";
  var oReq = new XMLHttpRequest();
  oReq.open("GET",url,true);
  oReq.responseType = "arraybuffer";



  oReq.onload = function(e) {
    let info = readData();
    console.log(info);

    function readData(){

      let arraybuffer = oReq.response;

      let data = new Uint8Array(arraybuffer);
      let arr = new Array();
      for(let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      let bstr = arr.join("");

      let workbook = XLSX.read(bstr, {type:"binary"});

      let first_sheet_name = workbook.SheetNames[0];

      let worksheet = workbook.Sheets[first_sheet_name];
      let info = XLSX.utils.sheet_to_json(worksheet,{raw:true});

      return info;
    }
  }
  oReq.send()
}

myfunction();
})
