import {getAllClubs , deleteClubs, addClubs,getClubsById,updateid} from'./services.js';

const app={
    //  hahdakdhahdashdkashdkahadsadasdadasdasdasd
    //adasdasdas
// adsaasdasdads
// adsad/

    renderDoiBong :async function (){
 
        const data= await getAllClubs();
        const listTr=data?.map((item,index)=>{
            return `
            <tr>
           
              <th scope="row">${index+1}</th>
              <td>${item.name}</td>
              <td><img src="${item.logo}" alt="" width="60px"></td>
              <td>${item.count}</td>
           
              <td>
                <button data-id="${item.id}" class="btn_xoa btn btn-danger">xóa</button>
                <button data-id="${item.id}" class="btn_sua btn btn-warning">sửa</button>
              </td>
            </tr>
            `
        }).join('');
        // console.log(listTr);
        const tBody=document.querySelector('tbody')
        tBody.innerHTML=listTr;
        this.handelDelete();
        this.handelEdit();
    },
    handelDelete :function(){
        const btnXoa=document.querySelectorAll('.btn_xoa')
        btnXoa.forEach((item)=>{
            item.addEventListener('click',async()=>{
                // console.log("ok");
                // const id=item.getAttribute('data-id')
                const id=item.dataset.id
                // console.log(id)
                if(window.confirm("bạn có chắc chắn muốn xóa")){
                    // console.log(id);
                    await deleteClubs(id);
                    alert('xóa thành công');
                    
                }
                
            })
        })
    },
    handelEdit:function(){
        const btnEdit=document.querySelectorAll(".btn_sua")
        btnEdit.forEach((item)=>{
            item.addEventListener('click',async()=>{
                // console.log(1);
                const id=item.getAttribute('data-id');
                const clubs= await getClubsById(id);
                console.log(clubs);
                
                const content=document.getElementById('content').innerHTML=`
                <h1>sửa thông tin</h1>
                <form id="form">
                <div class="mb-3">
                    <label for="name" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="name" value="${clubs.name}">
                </div>
                <div class="mb-3">
                    <label for="logo" class="form-label">Logo</label>
                    <input type="text" class="form-control" id="logo" value="${clubs.logo}">
                </div>
                <div class="mb-3">
                    <label for="count" class="form-label">Count</label>
                    <input type="number" class="form-control" id="count" value="${clubs.count}">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                `
                const form=document.getElementById('form')
                form.addEventListener('submit',(e)=>{
                    e.preventDefault();
                    // console.log(1);
                    this.updateDoiBong(id);
                    
                })
            })
        })
    },
    updateDoiBong :async function(id){
        const inputUserName=document.getElementById("name")
        const inputLogo=document.getElementById("logo")
        const inputCount=document.getElementById("count")
        if(!inputUserName.value.trim()){
            alert("cần nhập User Name");
            inputUserName.focus();
            return;
        }
        if(!inputLogo.value.trim()){
            alert("cần nhập logo");
            inputLogo.focus();
            return;
        }
        if(!inputCount.value.trim()){
            alert("cần nhập Count");
            inputCount.focus();
            return;
        }
        const data={
            name:inputUserName.value,
            logo:inputLogo.value,
            count:Number(inputCount.value)
        }
        // console.log(data)
        await updateid(id,data);
        alert("sửa thành công");
    },
    renderAddDoiBong :function(){
        const btnAdd=document.getElementById("btn_them");
        
        btnAdd.addEventListener('click',()=>{
            // console.log("loi");
            const content =document.getElementById('content')
            content.innerHTML=`
            <h1>Thêm mới thông tin</h1>
            <form id="form">
                <div class="mb-3">
                    <label for="name" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="mb-3">
                    <label for="logo" class="form-label">Logo</label>
                    <input type="text" class="form-control" id="logo">
                </div>
                <div class="mb-3">
                    <label for="count" class="form-label">Count</label>
                    <input type="number" class="form-control" id="count">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>`

            const formAdd=document.getElementById("form")
            formAdd.addEventListener('submit',(e)=>{
                e.preventDefault();
                // console.log(1231);
                this.handelAdd();
                
            })
            
        })
    },
    handelAdd :async function(){
        const inputUserName=document.getElementById("name")
        const inputLogo=document.getElementById("logo")
        const inputCount=document.getElementById("count")
        if(!inputUserName.value.trim()){
            alert("cần nhập User Name");
            inputUserName.focus();
            return;
        }
        if(!inputLogo.value.trim()){
            alert("cần nhập logo");
            inputLogo.focus();
            return;
        }
        if(!inputCount.value.trim()){
            alert("cần nhập Count");
            inputCount.focus();
            return;
        }
        const data={
            name:inputUserName.value,
            logo:inputLogo.value,
            count:Number(inputCount.value)
        }
        // console.log(data)
        await addClubs(data);
        alert("thêm thành công")

    },
    start :function(){
        // console.log("ádad");
        this.renderDoiBong();
        this.renderAddDoiBong();
    }
}
app.start();

