
function my_submit()
{

const tbl=document.getElementById("book-list");
const my_form=document.getElementById("myform");
let cell1=document.getElementById("title").value;
let cell2=document.getElementById("author").value;
let cell3=document.getElementById("isbn").value;
const new_row=tbl.insertRow();
const new_button=document.createElement('button');
	new_button.textContent='x';
	new_button.classList.add('action-button');
	new_button.addEventListener('click',function(){
		
		if(tbl.rows.length>1 )
		{
			
			tbl.deleteRow(-1);
		}
	})
	const newcell1=new_row.insertCell()
const newcell2=new_row.insertCell()
const newcell3=new_row.insertCell()
const newcell4=new_row.insertCell()
newcell1.innerHTML=cell1;
newcell2.innerHTML=cell2;
newcell3.innerHTML=cell3;
newcell4.appendChild(new_button);
}