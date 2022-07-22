

      $(document).ready(function(){


        var tblcomp = document.getElementById('tblcomp');

        $.getJSON("compData.json", function(data){
        //    console.log(data);
          var strcomp ='<thead class="table-success"><tr><th>#</th><th>Logo</th><th>Company Name</th><th>About</th></tr></thead> <tbody>';
            let v = 1
            $.each(data, function(key,value){

              let row = `<tr><td> ${(v)} </td><td> <img src='${value.img_src}' title='${value.company_name}' > </td><td> ${value.company_name} </td><td> ${value.about} </td></tr>`;
              strcomp = strcomp + row;
              v++;

            });

            tblcomp.innerHTML = strcomp + '</tbody>';
        });
    });
      
        
