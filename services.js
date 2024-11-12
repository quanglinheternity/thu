export const getAllClubs= async ()=>{
    try {
     const res= await fetch('http://localhost:3000/clubs')
     const data=await res.json('');
     console.log(data);
    return data;
        
        
    } catch (error) {
        console.log('Lỗi lấy dữ liệu');
        
    }
}
export const deleteClubs=async(id)=>{
    try {
        await fetch(`http://localhost:3000/clubs/${id}`,{
            method:"delete"
        })
    } catch (error) {
        alert("lỗi xóa")
    }
}
export const addClubs=async(data)=>{
    try {
        await fetch(`http://localhost:3000/clubs`,{
            method:'post',
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)

        })
        
    } catch (error) {
        alert("lỗi thêm")
    }
}
export const getClubsById=async(id)=>{
    try {
        const res= await fetch(`http://localhost:3000/clubs/${id}`)
        // console.log(res)
        const data= res.json('');
        // console.log(data)
        return data;
    } catch (error) {
        alert("lỗi lấy dữ liệu by id")
    }
}
export const updateid=async(id,data)=>{
    try {
        await fetch(`http://localhost:3000/clubs/${id}`,{
        method:'put',
        headers:{
            "Content-Tpye":'application/json'
        },
        body: JSON.stringify(data)
    })
        
    } catch (error) {
        alert('lõi sứa')
    }
}