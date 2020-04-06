const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'https://fiis.com.br/lupa-de-fiis/';

puppeteer
	.launch()
	.then(browser => browser.newPage())
	.then(page => {
		return page.goto(url).then(function() {
			return page.content();
		});
	})
	.then(html => {
		const $ = cheerio.load(html);
		var fiis = [];

		const tabela = $('#filter--result-table tr').each(function(){
			fiiRow = new Object();
			fiiRow.ticker = $(this).find('td').eq(0).text().trim();
			fiiRow.pAlvo = $(this).find('td').eq(1).text().trim();
			fiiRow.tipoFii = $(this).find('td').eq(2).text().trim();
			fiiRow.admin = $(this).find('td').eq(3).text().trim();
			fiiRow.rendReal = $(this).find('td').eq(4).text().trim();
			fiiRow.rendPercent = $(this).find('td').eq(5).text().trim();
			fiiRow.dataPG = $(this).find('td').eq(6).text().trim();
			fiiRow.dataBase = $(this).find('td').eq(7).text().trim();
			fiiRow.rendMedReal = $(this).find('td').eq(8).text().trim();
			fiiRow.rendMedPercent = $(this).find('td').eq(9).text().trim();
			fiiRow.cota = $(this).find('td').eq(10).text().trim();
			//
			//
			//
			fiiRow.cotistas = $(this).find('td').eq(14).text().trim();
			fiiRow.patrimonio = $(this).find('td').eq(15).text().trim();
			console.log(fiiRow);
		})
      })
	  .catch(console.error);