jQuery(document).ready(function(r){function c(t){return["<a class='branch' href="+("https://github.com/GSA/digitalgov.gov/tree/"+t)+" title="+t+">"+t+"</a> "].join("\n")}function a(t,a){var e=c(a);if(console.log(t),null==t[0])var n=t.commit.committer.date,i=t.author.login;else n=t[0].commit.committer.date,i=t[0].author.login;var o=[e,"Last updated by","<a href="+("https://github.com/"+i)+" title="+i+">","<span class='commit-author'>"+i+"</span>","</a> on ","<a href="+("https://github.com/GSA/digitalgov.gov/commits/"+a+"/content/"+filepath)+">","<span class='commit-date'>"+function(t){var a=new Date(t);a.setUTCHours(a.getUTCHours()-4);var e=a.getUTCFullYear(),n=a.getUTCMonth().toString();n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n];var i=a.getUTCDate().toString();i=1<i.length?i:"0"+i;var o=a.getUTCHours().toString();if(12<o)var r=o-12;else var r=o;var c=a.getUTCMinutes().toString();c=1<c.length?c:"0"+c;a.getUTCSeconds().toString();if(12<o)var h="pm";else var h="am";return n+" "+i+", "+e+" at "+r+":"+c+" "+h+" ET"}(n)+"</span>","</a>",""].join("\n");r(".last_commit").each(function(t,a){r(this).append(o).removeClass("hidden")})}!function(){if(void 0!==editpathURL){var t=["<a target='_blank' class='edit_file_link' href='"+editpathURL+"' title='Edit in GitHub'>","Edit","</a>"].join("\n");r(".entry-meta .edit_file").html(t).removeClass("hidden")}}(),function(){"master"==branch?branchpath="":branchpath="/"+branch;var t="https://api.github.com/repos/"+git_org+"/"+git_repo+"/commits"+branchpath+"?path=/content/"+filepath;console.log(t),void 0!==t&&r.ajax({url:t,dataType:"json"}).done(function(t){void 0!==t&&(branch,a(t,branch))})}(filepath)});
jQuery(document).ready(function(s){function e(n){if(s("#TableOfContents > ul").each(function(e,t){s(t).find("li a").each(function(e,t){s(t).removeClass("active");var a,i=s(t).html(),o=s(t).attr("href").substring(1);a=o==n?"active":"",s(t).attr("title",i).attr("name",o).attr("class",a)})}),1==(a=!1,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(a=!0),a)){console.log("mobile device");var e=s("nav#TableOfContents ul:first-child > li").size();if(6<e){var t=e-4;s("nav#TableOfContents ul:first-child > li").slice(-t).addClass("ex"),s('<li class="more"><a href="#" title="">+ '+t+" more »</a></li>").appendTo(s("#TableOfContents ul:first-child"))}}else console.log("not a mobile device");var a}(s("#TableOfContents ul").addClass("add-list-reset"),s("#TableOfContents > ul:first").contents().unwrap(),s("#TableOfContents > li:first").contents().unwrap(),s("#TableOfContents > ul > ul").remove(),s("#TableOfContents a").click(function(){e(s(this).attr("name"))}),window.location.hash)&&e(window.location.hash.substring(1));0<s("#TableOfContents").length?s(this).show():s(this).hide();var t=s("#TableOfContents .more a").text();s("#TableOfContents .more a").toggle(function(){s(this).text("close"),s("nav#TableOfContents ul:first-child > li.ex").addClass("show")},function(){s(this).text(t),s("nav#TableOfContents ul:first-child > li.ex").removeClass("show")})});
jQuery(document).ready(function(o){o("#overlay .close").click(function(){o("#overlay").toggle()}),o(document).bind("keyup",function(e){191==e.keyCode&&o("#overlay").toggle()})});