    function createTable() {
      var table = document.getElementById("myTable");
      var num = document.getElementById("numPeople").value;
      table.innerHTML = ""; // 現在の表をクリアする
      
      // テーブルヘッダを作成する
      var header = table.createTHead();
      var row = header.insertRow(0);
      var cell = row.insertCell(0);
      cell.innerHTML = "名前";
      for (var i = 1; i <= num; i++) {
        cell = row.insertCell(i);
        cell.innerHTML = "選択" + i;
      }
      
      // テーブルボディを作成する
      var tbody = document.createElement("tbody");
      for (var j = 0; j < 5; j++) { // 例として5行作成する
        var row = tbody.insertRow(j);
        cell = row.insertCell(0);
        cell.innerHTML = "名前" + (j+1);
        for (var k = 1; k <= num; k++) {
          cell = row.insertCell(k);
          cell.innerHTML = '<select>';
          for (var n = 1; n <= 12; n++) {
            cell.innerHTML += '<option value="' + n + '">' + n + '</option>';
          }
          cell.innerHTML += '</select>';
        }
      }
      table.appendChild(tbody); // テーブルにテーブルボディを追加する
    
