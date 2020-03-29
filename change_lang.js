
function swap(json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
}

let en_ch = 
{
    "ivyscope":"领路人",
    "Home": "主页",
    "About Us": "关于我们",
    "Sign Up":"报名体验",
    "1-on-1":"一对一",
    "Immersive":"身临其境",
    "College Tours":"大学生活体验",
    "Helping students apply to the right colleges, not the most colleges":"大学在校生带领高中生提前体验大学生活，为选校申校打开新模式了解更多",
    "Learn More":"了解更多",
    "How It Works":"怎样参观大学才算身临其境",
    "Search":"搜索志趣相投的领路人",
    "Choose from our diverse pool of undergrad hosts who will help you fully immerse in campus life. Filter by schools, academic interests, extracurricular activities, and more. IvyScope+ listings, marked green on the top right corner, include overnight accomodation in your host’s dorm room and are available at select schools.":"我们的大学生领路人遍布美国各大高校，期待着带领高中生提前体验校园生活。您可以根据学校、学术兴趣、课外活动等筛选领路人。领路人 plus（右上角有绿色标记的）是被批准过的大学生，可让参观人在大学宿舍过夜，体验住宿生活。",
    "Book":"预定校园参观",
    "Think you found an ideal host? Send them an inquiry, discuss itineraries, and ask more questions. Once the visit is confirmed, start packing and get excited for your sneak peek at college life.":"找到了合适的领路人？在我们平台上跟ta打个招呼，讨论下行程。确认之后，就可以开始整理行李啦！提前体验大学生活，是不是有点小兴奋?",
    "Experience":"在梦校作一天学生",
    "Shadow your host as they go through a typical day on campus. Sit in on lectures, dine at the student cafeteria, attend a sports event, and so much more. You can also manage and plan visits to multiple colleges. Leave a review after your visit. This helps us build a strong and safe community.":"跟着领路人体验他们在校园的日常生活。旁听教授讲讲课，大学食堂里尝尝伙食，学生俱乐部看看热闹，校园体育比赛喝喝彩。大学生活千姿百态，体验过才知道哪所大学更适合自己。在领路人平台上能计划和管理多个学校的参观。参观完可别忘了留下个评论喔！",
    "Our full website will go live this fall. Sign up now to be the first to try it out.":"我们的平台将于今年夏天正式上线，现在报名抢先体验大学生活。",
    "Like Our Concept?":"喜欢我们的概念吗？",
    "I want to visit":"我想参观",
    "I want to host":"我想领路",
    "Are you a student, parent, or educator? Anyone can take our survey.":"我们诚邀学生、家长和教育者来谈谈您对申请大学时选校和校园参观的看法。",
    "Tell us your thoughts on IvyScope, so we can make college visits even more awesome!":"也一并告诉我们您对领路人的看法，我们想把校园参观做得更好！",
    "Take Our Survey":"填写问卷",
    "College Tours,":"大学参观",
    "Reimagined":"重新构想",
    "With admissions to elite colleges becoming more and more competitive, it is crucial to customize each school’s application and demonstrate interest and fit. IvyScope helps you find the right colleges through immersive tours, so you can focus your energy on fewer applications and personalize your essays to stand out from the crowd.":"随着申请精英大学的竞争越来越激烈，选择自己了解而且三观相合的学校往往能给你的申请加分。 领路人帮你身临其境体验校园生活，带你更深入了解一所大学。这样你就可以将精力集中在申请更适合自己的学校上，文书里也会有更多的话题可谈。",
    "Our Story":"为何创建领路人",
    "Recently, high school students are applying to more and more colleges at a time. We believe that treating college application as a number game is counterproductive. Admissions officers like applicants who understand and fit the campus culture. Shadowing a current college student through her typical day on campus offers valuable insight into fit and campus culture. Our founders have personally been asked by family members and friends to show them around campus. Now we want to expand this opportunity to more people, so that everyone, even those not as well-connected, can preview college life firsthand through our 1-on-1 immersive tours.":"近年来高中生人均开始申请越来越多的大学。我们认为大学申请应该注重质量而不是数量。招生官喜欢的申请人往往非常了解这所学校的校园文化，而且有着能适应其文化的素质。跟着领路人提前感受大学氛围能加强高中生对一所大学的了解，并搞清这所大学到底适不适合自己。我们自己和大学里的同学平常也会带高中的学弟学妹参观校园。我们想给更多高中生这样的体验机会。",
    "Our Team":"我们的团队",
    "Tian":"天昊",
    "Co-founder, CEO":"联合创始人，首席执行官",
    "Tian is an economics major at Dartmouth College and has experience in SAT/ACT tutoring, strategy consulting, and venture capital. He enjoys teaching and met many high schoolers eager to learn more about college life. Tian wants to make college counseling more accessible and eliminate information asymmetries in the industry.":"天昊在达特茅斯学院（Dartmouth College）学习经济，也在SAT/ACT辅导、战略咨询和风险投资方面有过工作经验。他喜欢教书，期间认识了许多想更深入了解大学生活的高中生。 天昊希望更多人能接触到实惠并高质量的大学选校咨询。",
    "Eric":"埃里克",
    "Co-founder, Lead Engineer":"联合创始人，首席工程师",
    "Eric is a senior at Dartmouth College majoring in computer science and philosophy. He is currently a software engineer intern working on Alexa Skills at Amazon. Eric is very passionate about technology, education equality, and food.":"埃里克（Eric）在达特茅斯学院读大四，主修计算机科学和哲学。他目前是亚马逊Alexa Skills的软件工程师实习生。埃里克对科技和教育平等充满热情。",
    "Cat":"凯特",
    "Co-founder, Lead Designer":"联合创始人，首席设计师",
    "Cat is a software engineer intern at Google on their engineering education team and a senior at Dartmouth College majoring in computer science. She is interested in using her background in technology, design, and business to inspire more students to pursue higher education.":"凯特（Catherine）是谷歌工程教育团队的软件工程师实习生，也是达特茅斯学院计算机科学专业的大四学生。她想利用自己对科技、设计和商业的热情，去激励更多的学生选择高等教育。",
    "Contact Us":"联系我们",
    "We would love to hear what you think about our project.":"我们很想听听您对我们项目的看法。",
    "Shoot us an email!":"随时电邮我们！"
}

let ch_en = swap(en_ch)


document.getElementById("change_ch").addEventListener("click", function(){
    updateLang("ch");
});

document.getElementById("change_en").addEventListener("click", function(){
    updateLang("en");
});

function updateLang(target_lang=null){
    let lang = sessionStorage.getItem('lang');
    console.log(lang)
    if(lang === null){
        sessionStorage.setItem('lang','en');
        lang = 'en';
    };

    if(target_lang === null){
        target_lang = lang
    }
    let mapping = null;
    if(target_lang === "en"){
        mapping = ch_en;
    }else if(target_lang == "ch"){
        mapping = en_ch;
    }
    let elems = document.getElementsByTagName("*");
    for (let i=0, max=elems.length; i < max; i++) {
        text = elems[i].textContent
        n_children = elems[i].children.length
        if(n_children === 0 && text in mapping){
            elems[i].textContent = mapping[text]
        }
            
    }
    sessionStorage.setItem('lang',target_lang)
}