const axios = require('axios');
const fs = require('fs/promises');
const path = require('path');

const url =
  'http://all.jbnu.ac.kr/uni/uni/cour/less/findLessSubjtTblInq.action';

const body = `<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns="http://www.nexacroplatform.com/platform/dataset">
	<Parameters>
		<Parameter id="JSESSIONID" />
		<Parameter id="gvYy">2017</Parameter>
		<Parameter id="gvShtm">U211600010</Parameter>
		<Parameter id="gvRechPrjtNo" />
		<Parameter id="gvRechDutyr" />
		<Parameter id="_ga">GA1.3.1147943870.1652138272</Parameter>
		<Parameter id="WMONID">NWH4mHJCzil</Parameter>
		<Parameter id="JSESSIONIDSSO">WoClwJ4UFdvuRq4TjILO0uRo3D1efTDV3B8ZaTnicVJjvouebHc3hIZXa1xbiSco.amV1c19kb21haW4vc2VydmVyNV8x</Parameter>
		<Parameter id="yy">2022</Parameter>
		<Parameter id="shtm">U211600010</Parameter>
		<Parameter id="fg" />
		<Parameter id="value1" />
		<Parameter id="value2" />
		<Parameter id="value3" />
		<Parameter id="sbjtNm">C</Parameter>
		<Parameter id="profNm" />
		<Parameter id="openLectFg" />
		<Parameter id="sType">EXT1</Parameter>
	</Parameters>
</Root>`;

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'text/xml',
};

// async function run() {
//   const response = await axios.post(url, body, { headers });
//   const data = response.data;
//   console.log(data);
//   fs.writeFile(path.resolve(__dirname, 'assets/lect.xml'), data);
// }

// run();

axios.post(url, body, { headers }).then((response) => {
  const data = response.data;
  fs.writeFile(path.resolve(__dirname, 'assets/lect.xml'), data);
});
