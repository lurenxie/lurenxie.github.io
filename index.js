function f_gongju() {
	// alert("断点");
	// document.getElementById("target_gongju").innerHTML.display = "block";
	document.getElementById('u_gongju').style.display='block';
	document.getElementById('u_shijie').style.display='none';
	document.getElementById('u_shenmei').style.display='none';
	document.getElementById('u_shuchu').style.display='none';
	document.getElementById('m_intro').style.display='none';
	document.getElementById('m_gongju_intro').style.display='block';
	document.getElementById('u_gongju').style.background='#3c3c3c';
	document.getElementById('m_gongju').style.background='#3c3c3c';
	document.getElementById('m_shijie').style.background='#555';
	document.getElementById('m_shenmei').style.background='#555';
	document.getElementById('m_shuchu').style.background='#555';

	document.getElementById('m_gongju_intro').style.display='block';
	document.getElementById('m_shijie_intro').style.display='none';
	document.getElementById('m_shenmei_intro').style.display='none';
	document.getElementById('m_shuchu_intro').style.display='none';
}
function f_shijie() {
	// alert("断点");
	// document.getElementById("target_gongju").innerHTML.display = "block";
	document.getElementById('u_shijie').style.display='block';
	document.getElementById('u_gongju').style.display='none';
	document.getElementById('u_shenmei').style.display='none';
	document.getElementById('u_shuchu').style.display='none';
	document.getElementById('u_shijie').style.background='#3c3c3c';
	document.getElementById('m_gongju').style.background='#555';
	document.getElementById('m_shijie').style.background='#3c3c3c';
	document.getElementById('m_shenmei').style.background='#555';
	document.getElementById('m_shuchu').style.background='#555';

	document.getElementById('m_gongju_intro').style.display='none';
	document.getElementById('m_shijie_intro').style.display='block';
	document.getElementById('m_shenmei_intro').style.display='none';
	document.getElementById('m_shuchu_intro').style.display='none';	
}
function f_shenmei() {
	// alert("断点");
	// document.getElementById("target_gongju").innerHTML.display = "block";
	document.getElementById('u_shenmei').style.display='block';
	document.getElementById('u_gongju').style.display='none';
	document.getElementById('u_shijie').style.display='none';
	document.getElementById('u_shuchu').style.display='none';
	document.getElementById('u_shenmei').style.background='#3c3c3c';
	document.getElementById('m_gongju').style.background='#555';
	document.getElementById('m_shijie').style.background='#555';
	document.getElementById('m_shenmei').style.background='#3c3c3c';
	document.getElementById('m_shuchu').style.background='#555';

	document.getElementById('m_gongju_intro').style.display='none';
	document.getElementById('m_shijie_intro').style.display='none';
	document.getElementById('m_shenmei_intro').style.display='block';
	document.getElementById('m_shuchu_intro').style.display='none';	
}
function f_shuchu() {
	// alert("断点");
	// document.getElementById("target_gongju").innerHTML.display = "block";
	document.getElementById('u_shuchu').style.display='block';
	document.getElementById('u_gongju').style.display='none';
	document.getElementById('u_shijie').style.display='none';
	document.getElementById('u_shenmei').style.display='none';
	document.getElementById('u_shuchu').style.background='#3c3c3c';
	document.getElementById('m_gongju').style.background='#555';
	document.getElementById('m_shijie').style.background='#555';
	document.getElementById('m_shenmei').style.background='#555';
	document.getElementById('m_shuchu').style.background='#3c3c3c';

	document.getElementById('m_gongju_intro').style.display='none';
	document.getElementById('m_shijie_intro').style.display='none';
	document.getElementById('m_shenmei_intro').style.display='none';
	document.getElementById('m_shuchu_intro').style.display='block';	
}