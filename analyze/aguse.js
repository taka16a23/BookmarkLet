function(){var get=window.getSelection().toString();var nodes=document.getElementsByTagName(\"a\");var n=0;for(i=0;i\u003Cnodes.length;i++){if(get!=\"\"){if(get==nodes[i].innerText){n=1;window.open(\"http://www.aguse.jp/?m=w&url=\"+nodes[i]);break;}}}if(n==0){if(get.match(/[.]/)){window.open(\"http://www.aguse.jp/?m=w&url=\"+get);}}if(get==\"\"){window.open(\"http://www.aguse.jp/?m=w&url=\"+document.URL);}}
