window.onload=function(){var browseHistory=document.getElementById('browse-history');var historyItems=JSON.parse(localStorage.getItem('browseHistory'))||[];for(var i=0;i<historyItems.length;i++){var item=document.createElement('div');item.classList.add('part-item-website','f-item','p-item');item.innerHTML=historyItems[i];browseHistory.appendChild(item);}};function addHistory(element){var link=element.getAttribute('href');var image=element.querySelector('img').getAttribute('src');var title=element.querySelector('.title').textContent;var browseHistory=document.getElementById('browse-history');var newHistoryItem=document.createElement('div');newHistoryItem.classList.add('part-item-website','f-item','p-item');newHistoryItem.innerHTML=`<a class="f-box" href="${link}" target="_blank">
             <h3 class="item-title">
               <i class="item-ico">
                 <i class="thumb thumb-img">
                   <img src="${image}" alt="IconFont">
                 </i>
               </i>
               <strong class="title">${title}</strong>
             </h3>
           </a>`;var historyItems=JSON.parse(localStorage.getItem('browseHistory'))||[];var index=historyItems.findIndex(function(item){return item===newHistoryItem.innerHTML;});if(index>-1){historyItems.splice(index,1);}
historyItems.unshift(newHistoryItem.innerHTML);if(historyItems.length>12){historyItems.pop();}
localStorage.setItem('browseHistory',JSON.stringify(historyItems));browseHistory.innerHTML='';for(var i=0;i<historyItems.length;i++){var item=document.createElement('div');item.classList.add('part-item-website','f-item','p-item');item.innerHTML=historyItems[i];browseHistory.appendChild(item);}}