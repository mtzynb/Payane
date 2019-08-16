'use strict';
debugger;



function validate(){
var	flag=true;

	document.getElementById('name_td').innerHTML="&nbsp;";
	document.getElementById('family_td').innerHTML="&nbsp;";
	document.getElementById('nc_td').innerHTML="&nbsp;";
	document.getElementById('number_td').innerHTML="&nbsp;";
	document.getElementById('user_td').innerHTML="&nbsp;";
	document.getElementById('pass_td').innerHTML="&nbsp;";
	document.getElementById('pass2_td').innerHTML="&nbsp;";
	document.getElementById('email_td').innerHTML="&nbsp;";
	document.getElementById('code_err').innerHTML="&nbsp;";

 var name=document.getElementById('name').value;
 var family=document.getElementById('family').value;
 var nc=document.getElementById('nc').value;
 var number=document.getElementById('number').value;
 var user=document.getElementById('user').value;
 var pass=document.getElementById('pass').value;
 var pass2=document.getElementById('pass2').value;
 var email=document.getElementById('email').value;
 var code=document.getElementById('code').value;
 
 var sex0=document.myform.sex[0].checked;
 var sex1=document.myform.sex[1].checked;
 var re=/^[\u0600-\u06ff-\s]+$/; // regular expression or  input pattern for persian name.
 
 var nc1=nc.length;
var email_re =/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
 if(re.test(name)){
			document.getElementById('name_td').innerHTML='&nbsp;&nbsp;&nbsp;';
			}else {
		document.getElementById('name_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!فارسی بنویسید </small></p>';
		flag=false;
		}
	if (name=="" ){
				document.getElementById('name_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکردن این فیلد الزامی است. </small></p>';
				flag=false;
	}
 if(re.test(family)){
			document.getElementById('family_td').innerHTML='&nbsp;&nbsp;&nbsp;';
			}else {
		document.getElementById('family_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!فارسی بنویسید </small></p>';
		flag=false;
		}
	if (family=="" ){
				document.getElementById('family_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکردن این فیلد الزامی است. </small></p>';
				flag=false;
	}
	if(nc==""){
		document.getElementById('nc_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکردن این فیلد الزامی است. </small></p>';
				flag=false;
	}
	if(nc!=""){
if(isNaN(nc) || nc1!=10){
	flag=false;
	 document.getElementById('nc_td').innerHTML='<span style="color:red;"><small> &nbsp;&nbsp;!لطفا یک عدد۱۰ رقمی وارد کنید. </small></span>';
	}}
if(number==""){flag=false;
	 document.getElementById('number_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکردن این فیلد الزامی است. </small></p>';
	 }
	 if(number!=""){
if(isNaN(number)|| number.length!=11){
	flag=false;
	 document.getElementById('number_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!شماره تلفن معتبر نیست. </small></p>';	
	 }} 
if(user==""){flag=false;
	 document.getElementById('user_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکردن این فیلد الزامی است. </small></p>';
	 }
if(pass==""){flag=false;
	 document.getElementById('pass_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکردن این فیلد الزامی است. </small></p>';
	 }
if(pass2==""){flag=false;
	 document.getElementById('pass2_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکردن این فیلد الزامی است. </small></p>';
	 }		
if(pass2!="" && pass2!=pass){
	flag=false;
	 document.getElementById('pass2_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!رمزهای عبور مطابقت ندارند.</small></p>';
}	 
	if(email==""){flag=false;
	 document.getElementById('email_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکردن این فیلد الزامی است. </small></p>';
	 }	
	 if(email!="" ){
	if ( email_re.test(email)){
//			alert(1);
		}else{
			//alert(0);
			flag=false;
			document.getElementById('email_td').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!فرمت ایمیل صحیح نیست. </small></p>';

	 }}
	 if(sex0 || sex1 ){
		document.getElementById('sex_err').innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;';
	}else{
		document.getElementById('sex_err').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!لطفا انتخاب کنید. </small></p>';
		flag=false;
		}
	
	 	if(code==""){flag=false;
	 document.getElementById('code_err').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!پرکن. </small></p>';
	 }	
	 if(code!="" ){
	if ( code=="تهران"){
//			alert(1);
		}else{
			//alert(0);
			flag=false;
			document.getElementById('code_err').innerHTML='<p style="color:red;"> <small>&nbsp;&nbsp;!غلط!! </small></p>';

	 }}
	
	
	return flag;	
}