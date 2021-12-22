(function () {


	"use strict";

	function rasparDados() {

		const postCount = prompt("Quantos posts tivemos neste mês?");

		let views = document.getElementsByClassName('video-count');
		let links = document.getElementsByClassName('video-feed-item-wrapper');


		for (let i = 0; i < parseInt(postCount); i++) {
			console.log(kmbToInteger(views[i].innerText));
			console.log(links[i].href)
		}

		buildCSV({'views': views, 'links': links, 'count': parseInt(postCount)})
	}

	
	function kmbToInteger(number) {
		let lookup = {
			'K': 1000,
			'M': 1000000,
			'B': 1000000000
		}

		const multiplier = number.charAt(number.length-1)

		return parseFloat(number) * lookup[multiplier]
	}

	function buildCSV(params) {
		let CSV = '"LINK DO VÍDEO","VIEWS"\n';
		
		let totalViews = 0;


		for(let i=0 ; i< params['count'] ; i++) //loop do tamanho da lista
		{
			
			let views = kmbToInteger(params['views'][i].innerText);
			let link  = params['links'][i].href;

			totalViews += views;

			//montagem de uma linha de acordo com a posição do loop e suas colunas correspondentes
			const linha = '"'   + link  + 
						'","' + views + '"\n'; //O \n serve pra quebrar linha

			CSV = CSV + linha;
		}
		
		CSV = CSV + '"VIEWS TOTAIS DO MÊS: ","' + totalViews +'"\n';

		//criação do arquivo para download
		var link    = document.createElement('a');
		link.setAttribute('download', 'tiktok-views-data.csv');
		link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(CSV));
		link.click(); 
	}

	//Código para quando o botão no menu de contexto for acionado
	if (window.hasOwnProperty("btnDireitoRaspar") && btnDireitoRaspar) {
		btnDireitoRaspar = false;
		rasparDados();
	}
})();
