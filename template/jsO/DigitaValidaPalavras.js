(function(_0x3d584c,_0x2f73b2){const _0x2a2132=_0x3d584c();while(!![]){try{const _0x40a8f9=-parseInt(_0x2ef0(0x6))/0x1+parseInt(_0x2ef0(0x1))/0x2+parseInt(_0x2ef0(0x2))/0x3*(-parseInt(_0x2ef0(0x3))/0x4)+-parseInt(_0x2ef0(0x8))/0x5*(parseInt(_0x2ef0(0x5))/0x6)+parseInt(_0x2ef0(0x9))/0x7+-parseInt(_0x2ef0(0x7))/0x8+-parseInt(_0x2ef0(0x4))/0x9*(-parseInt(_0x2ef0(0x0))/0xa);if(_0x40a8f9===_0x2f73b2){break;}else{_0x2a2132['push'](_0x2a2132['shift']());}}catch(_0x5ab869){_0x2a2132['push'](_0x2a2132['shift']());}}}(_0x30f7,0x72931));var palavraDoDia;var ultimoClicado=null;var contadorCamposPreenchidos=!![];var podedigitar=!![];function _0x2ef0(_0x4e29d3,_0x30f761){const _0x2ef0ad=_0x30f7();_0x2ef0=function(_0x3899fd,_0xc64184){_0x3899fd=_0x3899fd-0x0;let _0x15c5a2=_0x2ef0ad[_0x3899fd];return _0x15c5a2;};return _0x2ef0(_0x4e29d3,_0x30f761);}var JogoAtivoInativo=!![];var acertosTotais=0x0;function _0x30f7(){const _0x58a425=['\x31\x33\x32\x70\x4a\x5a\x68\x73\x45','\x31\x31\x32\x37\x34\x30\x33\x7a\x53\x54\x56\x61\x66','\x31\x38\x52\x50\x41\x6b\x5a\x78','\x35\x30\x30\x31\x33\x37\x73\x77\x70\x54\x58\x65','\x37\x30\x34\x36\x32\x33\x32\x74\x50\x71\x4d\x51\x4b','\x31\x34\x37\x33\x37\x30\x55\x5a\x62\x70\x7a\x6a','\x31\x38\x36\x33\x34\x35\x36\x66\x5a\x55\x78\x68\x62','\x31\x38\x30\x54\x57\x68\x6e\x70\x79','\x31\x30\x33\x30\x33\x36\x46\x78\x70\x6b\x71\x59','\x35\x37\x36\x32\x37\x78\x6d\x48\x64\x58\x72'];_0x30f7=function(){return _0x58a425;};return _0x30f7();}var acertosPosErradaTotais=0x0;var erradasTotais=0x0;var loadingFront=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72']('\x2e\x61\x6e\x61\x6c\x69\x73\x61\x6e\x64'+'\x6f\x50\x61\x6c\x61\x76\x72\x61');let jogo=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72']('\x23\x6a\x6f\x67\x6f');function loadGame(){const _0x477c8a={'\x43\x68\x61\x63\x59':function(_0x4abf2f){return _0x4abf2f();}};criaCaixas();_0x477c8a['\x43\x68\x61\x63\x59'](cliqueNaBoxDaletra);_0x477c8a['\x43\x68\x61\x63\x59'](focusNaPrimeiraCaixa);}async function DigitaValidaPalavra(){const _0x5399f3={'\x69\x4c\x79\x73\x6c':function(_0x51593d,_0x256e4c){return _0x51593d==_0x256e4c;},'\x45\x4a\x77\x55\x41':'\x64\x69\x63\x61','\x7a\x46\x4e\x6e\x78':function(_0x402e77,_0x4c5060){return _0x402e77>=_0x4c5060;},'\x68\x74\x62\x4f\x56':'\x31\x7c\x32\x7c\x30\x7c\x33\x7c\x34','\x68\x63\x50\x4d\x6c':'\x61\x63\x74\x69\x76\x65','\x45\x6f\x68\x66\x41':'\x6c\x65\x74\x72\x61\x43\x6f\x72\x72\x65'+'\x74\x61\x4c\x75\x67\x61\x72\x43\x65\x72'+'\x74\x6f','\x62\x6b\x4f\x6f\x43':'\x62\x6c\x6f\x63\x6b','\x4d\x59\x68\x78\x49':'\x4e\u00e3\x6f\x20\x65\x20\x70\x6f\x73\x73'+'\x69\x76\x65\x6c\x20\x64\x65\x6c\x65\x74'+'\x61\x72\x20\x61\x20\x64\x69\x63\x61','\x7a\x53\x41\x7a\x75':'\x2e\x6d\x73\x67\x45\x72\x72\x6f','\x71\x6f\x67\x73\x59':'\x42\x61\x63\x6b\x73\x70\x61\x63\x65','\x66\x49\x58\x6f\x68':'\x41\x72\x72\x6f\x77\x4c\x65\x66\x74','\x65\x57\x76\x79\x72':'\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74','\x71\x55\x53\x4c\x4c':function(_0x1021d6,_0x4557b4){return _0x1021d6!=_0x4557b4;},'\x63\x6e\x41\x73\x4b':function(_0x3bf2f5,_0x16213c){return _0x3bf2f5==_0x16213c;},'\x65\x7a\x75\x70\x63':function(_0x1b2004){return _0x1b2004();},'\x43\x5a\x4e\x41\x47':function(_0x19f599,_0x3f3d21){return _0x19f599!=_0x3f3d21;},'\x46\x74\x44\x76\x73':'\x35\x7c\x36\x7c\x32\x7c\x33\x7c\x30\x7c'+'\x34\x7c\x31','\x54\x50\x76\x4a\x52':'\x69\x6e\x61\x74\x69\x76\x65','\x47\x64\x41\x6c\x4c':'\x45\x6e\x74\x65\x72','\x69\x74\x6f\x53\x57':function(_0x46f90e,_0x1c97f1){return _0x46f90e==_0x1c97f1;},'\x61\x51\x54\x66\x63':function(_0x2225cf,_0x330eaa){return _0x2225cf==_0x330eaa;},'\x4d\x4c\x6b\x46\x51':'\x44\x69\x67\x69\x74\x65\x20\x74\x6f\x64'+'\x61\x73\x20\x61\x73\x20\x6c\x65\x74\x72'+'\x61\x73','\x62\x52\x70\x5a\x6c':function(_0x15e0ed,_0x4b7b7d){return _0x15e0ed<_0x4b7b7d;},'\x73\x6b\x6f\x6f\x70':function(_0x4b81a4,_0x114340){return _0x4b81a4==_0x114340;},'\x52\x4f\x56\x74\x6a':'\x4e\u00e3\x6f\x20\x65\x20\x70\x65\x72\x6d'+'\x69\x74\x69\x64\x6f\x20\x65\x64\x69\x74'+'\x61\x72\x20\x61\x20\x64\x69\x63\x61','\x70\x65\x57\x68\x4e':function(_0x2854a4,_0x279547){return _0x2854a4<_0x279547;},'\x67\x50\x4b\x77\x42':'\x6f\x66\x66','\x57\x57\x56\x41\x41':function(_0x26c7cc,_0x3ddce0){return _0x26c7cc<_0x3ddce0;},'\x66\x6f\x76\x78\x45':function(_0x2cd03b,_0x38cc24){return _0x2cd03b==_0x38cc24;},'\x6e\x52\x63\x77\x59':function(_0x464aee){return _0x464aee();},'\x52\x47\x61\x62\x6f':function(_0x5acbf2,_0x33174d){return _0x5acbf2(_0x33174d);},'\x7a\x66\x58\x69\x45':'\x63\x6c\x69\x63\x6b','\x63\x61\x47\x78\x53':'\x2e\x74\x65\x63\x6c\x61\x64\x6f\x20\x73'+'\x70\x61\x6e','\x47\x6f\x55\x44\x67':'\x62\x6f\x64\x79','\x77\x4b\x77\x41\x7a':'\x6b\x65\x79\x75\x70','\x69\x65\x76\x59\x58':function(_0x56f44c,_0x575f5a){return _0x56f44c==_0x575f5a;},'\x56\x6b\x53\x4a\x52':'\x6e\x6f\x6e\x65','\x73\x64\x58\x44\x45':function(_0x50f5d4,_0x5a88f9){return _0x50f5d4(_0x5a88f9);},'\x49\x75\x70\x67\x4b':function(_0x567946,_0x2fca49){return _0x567946!=_0x2fca49;},'\x79\x4d\x51\x4b\x73':function(_0x4df35f,_0x173ce9){return _0x4df35f!=_0x173ce9;},'\x64\x52\x63\x41\x6c':function(_0xdf5296,_0x15c79f){return _0xdf5296==_0x15c79f;},'\x65\x44\x4b\x67\x4c':'\x35\x7c\x30\x7c\x34\x7c\x31\x7c\x32\x7c'+'\x33','\x56\x59\x67\x4e\x56':function(_0x3fd9f9){return _0x3fd9f9();}};palavraDoDia=await GeradorDePalavras();_0x59ced5();_0x5399f3['\x56\x59\x67\x4e\x56'](_0x4cc690);loadGame();gerarDica();_0x5399f3['\x65\x7a\x75\x70\x63'](gerarDicaText);function _0x575b22(_0x3e4652){const _0x3d0f25={'\x70\x73\x44\x6f\x56':function(_0x457d96,_0x13b74b){return _0x5399f3['\x7a\x46\x4e\x6e\x78'](_0x457d96,_0x13b74b);},'\x53\x54\x42\x58\x69':_0x5399f3['\x68\x74\x62\x4f\x56'],'\x43\x71\x67\x57\x4f':_0x5399f3['\x68\x63\x50\x4d\x6c'],'\x59\x44\x75\x51\x49':function(_0x1dc944,_0x33daeb){return _0x5399f3['\x69\x4c\x79\x73\x6c'](_0x1dc944,_0x33daeb);},'\x7a\x50\x4d\x68\x6b':_0x5399f3['\x45\x6f\x68\x66\x41'],'\x64\x6a\x47\x46\x6c':_0x5399f3['\x62\x6b\x4f\x6f\x43'],'\x50\x44\x6e\x62\x48':_0x5399f3['\x4d\x59\x68\x78\x49'],'\x48\x65\x74\x75\x43':_0x5399f3['\x7a\x53\x41\x7a\x75']};let _0x2fd0df=ultimoClicado['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c']('\x6c\x69');let _0x4f4de9=[_0x5399f3['\x71\x6f\x67\x73\x59'],_0x5399f3['\x66\x49\x58\x6f\x68'],_0x5399f3['\x65\x57\x76\x79\x72']];podedigitar=!![];if(!JogoAtivoInativo)ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64'](_0x5399f3['\x68\x63\x50\x4d\x6c']);if(_0x5399f3['\x69\x4c\x79\x73\x6c'](_0x3e4652,_0x4f4de9[0x1])){if(_0x5399f3['\x71\x55\x53\x4c\x4c'](ultimoClicado['\x70\x72\x65\x76\x69\x6f\x75\x73\x45\x6c'+'\x65\x6d\x65\x6e\x74\x53\x69\x62\x6c\x69'+'\x6e\x67'],undefined)){ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65']('\x61\x63\x74\x69\x76\x65');ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x69\x6e\x61\x74\x69\x76\x65');ultimoClicado=ultimoClicado['\x70\x72\x65\x76\x69\x6f\x75\x73\x45\x6c'+'\x65\x6d\x65\x6e\x74\x53\x69\x62\x6c\x69'+'\x6e\x67'];ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64'](_0x5399f3['\x68\x63\x50\x4d\x6c']);}}if(_0x3e4652==_0x4f4de9[0x2]){if(ultimoClicado['\x6e\x65\x78\x74\x53\x69\x62\x6c\x69\x6e'+'\x67']!=undefined){ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x5399f3['\x68\x63\x50\x4d\x6c']);ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x69\x6e\x61\x74\x69\x76\x65');ultimoClicado=ultimoClicado['\x6e\x65\x78\x74\x53\x69\x62\x6c\x69\x6e'+'\x67'];ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x61\x63\x74\x69\x76\x65');}}if(_0x5399f3['\x63\x6e\x41\x73\x4b'](_0x3e4652,_0x4f4de9[0x0])){let _0x4c8952=_0x5399f3['\x65\x7a\x75\x70\x63'](_0x2ddf80);if(_0x4c8952)return;if(_0x5399f3['\x43\x5a\x4e\x41\x47'](ultimoClicado['\x70\x72\x65\x76\x69\x6f\x75\x73\x45\x6c'+'\x65\x6d\x65\x6e\x74\x53\x69\x62\x6c\x69'+'\x6e\x67'],undefined)){ultimoClicado['\x70\x72\x65\x76\x69\x6f\x75\x73\x45\x6c'+'\x65\x6d\x65\x6e\x74\x53\x69\x62\x6c\x69'+'\x6e\x67']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x66\x6f\x72\x45\x61\x63\x68'](_0x3212ef=>{if(_0x5399f3['\x69\x4c\x79\x73\x6c'](_0x3212ef,_0x5399f3['\x45\x4a\x77\x55\x41']))_0x4c8952=!![];});}ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x66\x6f\x72\x45\x61\x63\x68'](_0x415cb1=>{if(_0x415cb1==_0x5399f3['\x45\x4a\x77\x55\x41'])_0x4c8952=!![];});if(_0x4c8952)return;if(ultimoClicado['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']!=''){if(_0x5399f3['\x71\x55\x53\x4c\x4c'](ultimoClicado['\x70\x72\x65\x76\x69\x6f\x75\x73\x45\x6c'+'\x65\x6d\x65\x6e\x74\x53\x69\x62\x6c\x69'+'\x6e\x67'],null)){const _0x5a9dba=_0x5399f3['\x46\x74\x44\x76\x73']['\x73\x70\x6c\x69\x74']('\x7c');let _0x303965=0x0;while(!![]){switch(_0x5a9dba[_0x303965++]){case'\x30':ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x5399f3['\x54\x50\x76\x4a\x52']);continue;case'\x31':return;case'\x32':ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x69\x6e\x61\x74\x69\x76\x65');continue;case'\x33':ultimoClicado=ultimoClicado['\x70\x72\x65\x76\x69\x6f\x75\x73\x45\x6c'+'\x65\x6d\x65\x6e\x74\x53\x69\x62\x6c\x69'+'\x6e\x67'];continue;case'\x34':ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x61\x63\x74\x69\x76\x65');continue;case'\x35':ultimoClicado['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']='';continue;case'\x36':ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x5399f3['\x68\x63\x50\x4d\x6c']);continue;}break;}}else{ultimoClicado['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']='';}}else{_0x2fd0df['\x66\x6f\x72\x45\x61\x63\x68']((_0x49fc38,_0x22256a)=>{if(ultimoClicado==_0x49fc38&&_0x3d0f25['\x70\x73\x44\x6f\x56'](_0x22256a,0x1)){const _0x4ef691=_0x3d0f25['\x53\x54\x42\x58\x69']['\x73\x70\x6c\x69\x74']('\x7c');let _0x48406b=0x0;while(!![]){switch(_0x4ef691[_0x48406b++]){case'\x30':ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64'](_0x3d0f25['\x43\x71\x67\x57\x4f']);continue;case'\x31':_0x49fc38['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x3d0f25['\x43\x71\x67\x57\x4f']);continue;case'\x32':ultimoClicado=_0x2fd0df[_0x22256a-0x1];continue;case'\x33':ultimoClicado['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']='';continue;case'\x34':return;}break;}}});}}function _0x2ddf80(){const _0x3d213a={'\x4e\x64\x4c\x66\x51':_0x3d0f25['\x7a\x50\x4d\x68\x6b'],'\x57\x43\x75\x4d\x57':_0x3d0f25['\x50\x44\x6e\x62\x48']};let _0x29eaf4=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72'](_0x3d0f25['\x48\x65\x74\x75\x43']);let _0x5e545d=![];if(ultimoClicado['\x70\x72\x65\x76\x69\x6f\x75\x73\x45\x6c'+'\x65\x6d\x65\x6e\x74\x53\x69\x62\x6c\x69'+'\x6e\x67']!=undefined){ultimoClicado['\x70\x72\x65\x76\x69\x6f\x75\x73\x45\x6c'+'\x65\x6d\x65\x6e\x74\x53\x69\x62\x6c\x69'+'\x6e\x67']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x66\x6f\x72\x45\x61\x63\x68'](_0x2a9886=>{if(_0x3d0f25['\x59\x44\x75\x51\x49'](_0x2a9886,_0x3d0f25['\x7a\x50\x4d\x68\x6b'])){_0x5e545d=!![];_0x29eaf4['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']=_0x3d0f25['\x64\x6a\x47\x46\x6c'];_0x29eaf4['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x3d0f25['\x50\x44\x6e\x62\x48'];}});}ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x66\x6f\x72\x45\x61\x63\x68'](_0x31e61a=>{if(_0x31e61a==_0x3d213a['\x4e\x64\x4c\x66\x51']){_0x5e545d=!![];_0x29eaf4['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']='\x62\x6c\x6f\x63\x6b';_0x29eaf4['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x3d213a['\x57\x43\x75\x4d\x57'];}});return _0x5e545d;}}async function _0x32a860(_0xba5bfb){let _0xa85cc0=[_0x5399f3['\x47\x64\x41\x6c\x4c']];if(_0x5399f3['\x69\x74\x6f\x53\x57'](_0xba5bfb,_0xa85cc0[0x0])){if(_0x3083c8()){await _0x5399f3['\x65\x7a\x75\x70\x63'](validaPalavraDigitada);}}}function _0x3083c8(){let _0x295008=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72'](_0x5399f3['\x7a\x53\x41\x7a\x75']);let _0x31522e=0x0;ultimoClicado['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c']('\x6c\x69')['\x66\x6f\x72\x45\x61\x63\x68'](_0x4796ce=>{if(_0x5399f3['\x43\x5a\x4e\x41\x47'](_0x4796ce['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c'],''))_0x31522e++;});if(_0x5399f3['\x61\x51\x54\x66\x63'](_0x31522e,palavraDoDia['\x71\x6e\x74\x4c\x65\x74\x72\x61\x73']))return!![];_0x295008['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']='\x62\x6c\x6f\x63\x6b';_0x295008['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x5399f3['\x4d\x4c\x6b\x46\x51'];return![];}function _0x3ff251(){let _0x54fbc0=ultimoClicado['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c']('\x6c\x69');for(let _0x22eafc=0x0;_0x5399f3['\x62\x52\x70\x5a\x6c'](_0x22eafc,_0x54fbc0['\x6c\x65\x6e\x67\x74\x68']);_0x22eafc++){if(_0x54fbc0[_0x22eafc]['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']==''){contadorCamposPreenchidos=![];}}if(!contadorCamposPreenchidos){contadorCamposPreenchidos=!![];return!![];}else if(_0x5399f3['\x73\x6b\x6f\x6f\x70'](ultimoClicado['\x6e\x65\x78\x74\x53\x69\x62\x6c\x69\x6e'+'\x67'],null)){return![];}else{}}async function _0x449f22(_0x334d3d){const _0x581f66={'\x66\x6b\x56\x51\x51':_0x5399f3['\x62\x6b\x4f\x6f\x43'],'\x41\x78\x58\x77\x4b':_0x5399f3['\x52\x4f\x56\x74\x6a'],'\x6f\x4e\x4e\x4b\x41':_0x5399f3['\x7a\x53\x41\x7a\x75']};let _0x58461a=['\x41','\x42','\x43','\x44','\x45','\x46','\x47','\x48','\x49','\x4a','\x4b','\x4c','\x4d','\x4e','\x4f','\x50','\x51','\x52','\x53','\x54','\x55','\x56','\x57','\x58','\x59','\x5a','\x61','\x62','\x63','\x64','\x65','\x66','\x67','\x68','\x69','\x6a','\x6b','\x6c','\x6d','\x6e','\x6f','\x70','\x71','\x72','\x73','\x74','\x75','\x76','\x77','\x78','\x79','\x7a'];let _0x194270=ultimoClicado['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74'];for(let _0x98ff60=0x0;_0x5399f3['\x70\x65\x57\x68\x4e'](_0x98ff60,_0x194270['\x6c\x65\x6e\x67\x74\x68']);_0x98ff60++){if(_0x5399f3['\x69\x4c\x79\x73\x6c'](_0x194270[_0x98ff60],_0x5399f3['\x67\x50\x4b\x77\x42']))return;}for(let _0x58f6a3=0x0;_0x5399f3['\x57\x57\x56\x41\x41'](_0x58f6a3,_0x58461a['\x6c\x65\x6e\x67\x74\x68']);_0x58f6a3++){if(_0x5399f3['\x66\x6f\x76\x78\x45'](_0x58461a[_0x58f6a3],_0x334d3d)){let _0x5ddc15=_0x5399f3['\x65\x7a\x75\x70\x63'](_0x4bd0e3);if(_0x5ddc15)return;ultimoClicado['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x334d3d;_0x5399f3['\x6e\x52\x63\x77\x59'](_0x3bda41);return;}}function _0x4bd0e3(){const _0x2155b5={'\x59\x70\x74\x72\x69':_0x581f66['\x66\x6b\x56\x51\x51'],'\x4e\x55\x48\x79\x44':_0x581f66['\x41\x78\x58\x77\x4b']};let _0x3ddc26=![];let _0x9f63c2=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72'](_0x581f66['\x6f\x4e\x4e\x4b\x41']);ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x66\x6f\x72\x45\x61\x63\x68'](_0x3aada4=>{if(_0x3aada4=='\x6c\x65\x74\x72\x61\x43\x6f\x72\x72\x65'+'\x74\x61\x4c\x75\x67\x61\x72\x43\x65\x72'+'\x74\x6f'){_0x9f63c2['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']=_0x2155b5['\x59\x70\x74\x72\x69'];_0x9f63c2['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x2155b5['\x4e\x55\x48\x79\x44'];_0x3ddc26=!![];}});return _0x3ddc26;}}function _0x59ced5(){const _0x533fb9={'\x69\x61\x67\x56\x78':function(_0x144e9d,_0x37e14c){return _0x5399f3['\x52\x47\x61\x62\x6f'](_0x144e9d,_0x37e14c);},'\x79\x49\x4f\x58\x4d':_0x5399f3['\x7a\x66\x58\x69\x45']};let _0x1c8322=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c'](_0x5399f3['\x63\x61\x47\x78\x53']);_0x1c8322['\x66\x6f\x72\x45\x61\x63\x68'](_0x2d1c23=>{_0x2d1c23['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69'+'\x73\x74\x65\x6e\x65\x72'](_0x533fb9['\x79\x49\x4f\x58\x4d'],_0x47f3b5=>{_0x533fb9['\x69\x61\x67\x56\x78'](_0x103e6b,_0x47f3b5['\x74\x61\x72\x67\x65\x74']['\x74\x69\x74\x6c\x65']);_0x47f3b5['\x74\x61\x72\x67\x65\x74']['\x62\x6c\x75\x72']();});_0x2d1c23['\x72\x65\x6d\x6f\x76\x65\x45\x76\x65\x6e'+'\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']('\x63\x6c\x69\x63\x6b',_0x590337=>{});});}async function _0x4cc690(){let _0x1a07bb=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72'](_0x5399f3['\x47\x6f\x55\x44\x67']);_0x1a07bb['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69'+'\x73\x74\x65\x6e\x65\x72'](_0x5399f3['\x77\x4b\x77\x41\x7a'],async _0x1f2048=>{_0x5399f3['\x52\x47\x61\x62\x6f'](efeitoTecladoVirtualDigitando,_0x1f2048);await _0x5399f3['\x52\x47\x61\x62\x6f'](_0x103e6b,_0x1f2048['\x6b\x65\x79']);});}async function _0x103e6b(_0x4410c6){let _0x56af69=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72'](_0x5399f3['\x7a\x53\x41\x7a\x75']);if(_0x5399f3['\x69\x65\x76\x59\x58'](_0x56af69['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79'],'\x62\x6c\x6f\x63\x6b'))_0x56af69['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']=_0x5399f3['\x56\x6b\x53\x4a\x52'];if(!JogoAtivoInativo)return;_0x5399f3['\x52\x47\x61\x62\x6f'](_0x575b22,_0x4410c6);await _0x5399f3['\x52\x47\x61\x62\x6f'](_0x32a860,_0x4410c6);if(podedigitar){_0x5399f3['\x73\x64\x58\x44\x45'](_0x449f22,_0x4410c6);}podedigitar=_0x3ff251();}function _0x3bda41(){const _0x33e4a0={'\x7a\x75\x50\x6a\x78':function(_0x5d0a2d,_0xcdec2e){return _0x5399f3['\x49\x75\x70\x67\x4b'](_0x5d0a2d,_0xcdec2e);},'\x6b\x4a\x64\x64\x65':function(_0x5bbdb3,_0x52ff4e){return _0x5399f3['\x70\x65\x57\x68\x4e'](_0x5bbdb3,_0x52ff4e);},'\x72\x44\x76\x77\x77':function(_0x82d41,_0x3ab5ec){return _0x82d41==_0x3ab5ec;},'\x6b\x6c\x52\x46\x78':'\x61\x63\x74\x69\x76\x65'};if(_0x5399f3['\x79\x4d\x51\x4b\x73'](ultimoClicado['\x6e\x65\x78\x74\x53\x69\x62\x6c\x69\x6e'+'\x67'],null)){if(_0x5399f3['\x64\x52\x63\x41\x6c'](ultimoClicado['\x6e\x65\x78\x74\x53\x69\x62\x6c\x69\x6e'+'\x67']['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c'],'')){const _0x4952ef=_0x5399f3['\x65\x44\x4b\x67\x4c']['\x73\x70\x6c\x69\x74']('\x7c');let _0x2bd988=0x0;while(!![]){switch(_0x4952ef[_0x2bd988++]){case'\x30':ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64'](_0x5399f3['\x54\x50\x76\x4a\x52']);continue;case'\x31':ultimoClicado['\x6e\x65\x78\x74\x53\x69\x62\x6c\x69\x6e'+'\x67']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x61\x63\x74\x69\x76\x65');continue;case'\x32':ultimoClicado=ultimoClicado['\x6e\x65\x78\x74\x53\x69\x62\x6c\x69\x6e'+'\x67'];continue;case'\x33':return;case'\x34':ultimoClicado['\x6e\x65\x78\x74\x53\x69\x62\x6c\x69\x6e'+'\x67']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x5399f3['\x54\x50\x76\x4a\x52']);continue;case'\x35':ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x5399f3['\x68\x63\x50\x4d\x6c']);continue;}break;}}}else{_0x3646fd();return;}_0x5399f3['\x6e\x52\x63\x77\x59'](_0x3646fd);function _0x3646fd(){if(_0x33e4a0['\x7a\x75\x50\x6a\x78'](ultimoClicado['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c'],'')){let _0x36391b=ultimoClicado['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c']('\x6c\x69');for(let _0x775a9=0x0;_0x33e4a0['\x6b\x4a\x64\x64\x65'](_0x775a9,_0x36391b['\x6c\x65\x6e\x67\x74\x68']);_0x775a9++){if(_0x33e4a0['\x72\x44\x76\x77\x77'](_0x36391b[_0x775a9]['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c'],'')){ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x33e4a0['\x6b\x6c\x52\x46\x78']);ultimoClicado=_0x36391b[_0x775a9];ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64'](_0x33e4a0['\x6b\x6c\x52\x46\x78']);break;}}}}}}function criaCaixas(){const _0x3585c1={'\x7a\x43\x41\x68\x41':function(_0x6cc86f,_0x1cff5d){return _0x6cc86f<_0x1cff5d;},'\x76\x4c\x42\x4b\x48':'\x62\x6f\x78\x2d\x75\x6c\x2d\x63\x6f\x6e'+'\x74\x61\x69\x6e\x65\x72'};for(let _0x551b5e=0x0;_0x3585c1['\x7a\x43\x41\x68\x41'](_0x551b5e,palavraDoDia['\x71\x6e\x74\x4c\x65\x74\x72\x61\x73']);_0x551b5e++){const _0x38104f=document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d'+'\x65\x6e\x74']('\x75\x6c');_0x38104f['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x74\x65\x6e\x74\x61\x74\x69\x76\x61\x73');_0x38104f['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x74'+_0x551b5e);document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74'+'\x42\x79\x49\x64'](_0x3585c1['\x76\x4c\x42\x4b\x48'])['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c'+'\x64'](_0x38104f);for(let _0x25fee8=0x0;_0x25fee8<palavraDoDia['\x71\x6e\x74\x4c\x65\x74\x72\x61\x73'];_0x25fee8++){const _0x3d8ff9=document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d'+'\x65\x6e\x74']('\x6c\x69');_0x3d8ff9['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x69\x6e\x61\x74\x69\x76\x65');document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72']('\x2e\x74'+_0x551b5e)['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c'+'\x64'](_0x3d8ff9);}if(palavraDoDia['\x74\x65\x6e\x74\x61\x74\x69\x76\x61\x73']!=_0x551b5e)document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72']('\x2e\x74'+_0x551b5e)['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x6f\x66\x66');}}function cliqueNaBoxDaletra(){const _0x5aa103={'\x6b\x57\x74\x4b\x6a':'\x6f\x66\x66','\x4a\x63\x43\x79\x61':function(_0x2ee2d3,_0x505498){return _0x2ee2d3||_0x505498;},'\x4a\x44\x5a\x55\x67':'\x61\x63\x74\x69\x76\x65','\x70\x4b\x4a\x49\x7a':'\x69\x6e\x61\x74\x69\x76\x65','\x4f\x79\x51\x72\x71':'\x63\x6c\x69\x63\x6b','\x43\x79\x46\x4e\x6b':'\x2e\x74\x65\x6e\x74\x61\x74\x69\x76\x61'+'\x73\x20\x6c\x69','\x56\x4c\x71\x70\x55':'\x2e\x6d\x73\x67\x45\x72\x72\x6f'};let _0x124748=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c'](_0x5aa103['\x43\x79\x46\x4e\x6b']);let _0xd0bf78=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72'](_0x5aa103['\x56\x4c\x71\x70\x55']);_0x124748['\x66\x6f\x72\x45\x61\x63\x68'](_0x3b429b=>{_0x3b429b['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69'+'\x73\x74\x65\x6e\x65\x72'](_0x5aa103['\x4f\x79\x51\x72\x71'],_0x28113f=>{_0xd0bf78['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']='\x6e\x6f\x6e\x65';if(!JogoAtivoInativo)return;let _0x1cdc7b=_0x28113f['\x74\x61\x72\x67\x65\x74']['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x63\x6f\x6e\x74\x61\x69\x6e\x73'](_0x5aa103['\x6b\x57\x74\x4b\x6a']);let _0x137b17=_0x28113f['\x74\x61\x72\x67\x65\x74']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x63\x6f\x6e\x74\x61\x69\x6e\x73']('\x6c\x65\x74\x72\x61\x43\x6f\x72\x72\x65'+'\x74\x61\x4c\x75\x67\x61\x72\x43\x65\x72'+'\x74\x6f');if(_0x5aa103['\x4a\x63\x43\x79\x61'](_0x1cdc7b,_0x137b17))return;podedigitar=!![];if(ultimoClicado!=null){ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x5aa103['\x4a\x44\x5a\x55\x67']);ultimoClicado['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64'](_0x5aa103['\x70\x4b\x4a\x49\x7a']);}_0x28113f['\x74\x61\x72\x67\x65\x74']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64']('\x61\x63\x74\x69\x76\x65');_0x28113f['\x74\x61\x72\x67\x65\x74']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65']('\x69\x6e\x61\x74\x69\x76\x65');ultimoClicado=_0x28113f['\x74\x61\x72\x67\x65\x74'];});});}async function validaPalavraDigitada(){const _0x4596f9={'\x6d\x71\x4a\x6a\x61':'\x2e\x74\x65\x6e\x74\x61\x74\x69\x76\x61'+'\x73','\x46\x42\x48\x4a\x56':function(_0x55435f,_0x552c8e){return _0x55435f==_0x552c8e;},'\x65\x6f\x4c\x52\x47':function(_0x35dde9,_0x467cec){return _0x35dde9==_0x467cec;},'\x47\x41\x52\x68\x66':function(_0x53484d,_0x468eba){return _0x53484d(_0x468eba);}};let _0x2b9f63=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c'](_0x4596f9['\x6d\x71\x4a\x6a\x61']);let _0x595576='';for(let _0x4e868c of _0x2b9f63){if(_0x4596f9['\x46\x42\x48\x4a\x56'](_0x4e868c['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74'][0x1]['\x73\x70\x6c\x69\x74']('\x74')[0x1],palavraDoDia['\x74\x65\x6e\x74\x61\x74\x69\x76\x61\x73'])){let _0x497c13=0x0;_0x4e868c['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c']('\x6c\x69')['\x66\x6f\x72\x45\x61\x63\x68'](_0xfcf9d4=>{if(_0xfcf9d4['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']!=''){_0x497c13++;_0x595576+=_0xfcf9d4['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73'+'\x65']();}});if(_0x4596f9['\x65\x6f\x4c\x52\x47'](_0x497c13,palavraDoDia['\x71\x6e\x74\x4c\x65\x74\x72\x61\x73'])){await _0x4596f9['\x47\x41\x52\x68\x66'](validaRegraDoJogo,_0x595576);break;}}}}function focusNaPrimeiraCaixa(){const _0x215880={'\x76\x4c\x4b\x68\x6d':'\x2e\x74\x65\x6e\x74\x61\x74\x69\x76\x61'+'\x73\x20\x6c\x69','\x6b\x6b\x62\x65\x43':'\x61\x63\x74\x69\x76\x65'};let _0x4aa3b6=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72\x41\x6c\x6c'](_0x215880['\x76\x4c\x4b\x68\x6d'])[0x0];_0x4aa3b6['\x63\x6c\x69\x63\x6b']();_0x4aa3b6['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x61\x64\x64'](_0x215880['\x6b\x6b\x62\x65\x43']);_0x4aa3b6['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65']('\x69\x6e\x61\x74\x69\x76\x65');ultimoClicado=_0x4aa3b6;}