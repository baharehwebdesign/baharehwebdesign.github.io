/* ============================================================================
   APP — all data in APP_CONFIG, one module per feature.
   Edit APP_CONFIG to change content; no other code needs touching.
   ============================================================================ */
var APP_CONFIG = {

  /* ---------- where forms are delivered ---------- */
  email: 'codewithbahareh@gmail.com',
  formEndpoint: 'https://formsubmit.co/ajax/',      // swap for Formspree if preferred

  links: {
    youtube : 'https://www.youtube.com/@CodeWithBahareh?app=desktop',
    telegram: 'https://t.me/code_with_bahareh',
    whatsapp: 'https://wa.me/989368816387',
    github  : 'https://github.com/codewithbahareh',
    instagram:'https://www.instagram.com/code_with_bahareh'
  },

  /* ---------- YouTube channel stats ---------- */
  ytStats: [
    { num:'12K+', key:'st_subs'   },
    { num:'80+',  key:'st_videos' },
    { num:'450K', key:'st_views'  },
    { num:'100%', key:'st_free'   }
  ],

  /* ---------- featured course videos ---------- */
  videos: [
    { id:'v1', thumb:1, dur:'35:54',
      title:{ en:'Complete Guide to Installing Tools & Building Your First Web Page with HTML — HTML for Beginners',
              fa:'راهنمای کامل نصب ابزارها و ساخت اولین صفحه وب با HTML',
              it:'Guida completa agli strumenti e alla tua prima pagina web con HTML' },
      meta:{ en:'Session 1 · HTML for beginners', fa:'جلسه اول · HTML برای مبتدی‌ها', it:'Lezione 1 · HTML per principianti' },
      thumbFile:'youtube-html-session-1.jpg',
      url:'https://youtu.be/f0PwCpvnAPk?si=Fjrb_5WoJFTi7aFf' },
    { id:'v2', thumb:2, dur:'12:39',
      title:{ en:'HTML Tutorial Session 2: Head Tag, Metadata & Linking CSS',
              fa:'جلسه دوم HTML: تگ Head، متادیتا و اتصال CSS',
              it:'Corso HTML Lezione 2: tag Head, metadati e collegamento CSS' },
      meta:{ en:'Session 2 · Head, metadata & CSS', fa:'جلسه دوم · تگ Head، متادیتا و CSS', it:'Lezione 2 · Tag Head, metadati e CSS' },
      thumbFile:'youtube-html-session-2.jpg',
      url:'https://youtu.be/Y8-GtJgFpvY?si=V2ll3gT5oKNUw9hG' },
    { id:'v3', thumb:3, dur:'37:53',
      title:{ en:'Text Basics — Session 3: Principles of Text Content',
              fa:'جلسه سوم: اصول تولید محتوای متنی',
              it:'Lezione 3: principi del contenuto testuale' },
      meta:{ en:'Session 3 · Text basics', fa:'جلسه سوم · مبانی متن', it:'Lezione 3 · Basi del testo' },
      thumbFile:'youtube-html-session-3.jpg',
      url:'https://youtu.be/LafVMGAPrcE?si=bBfU_xwSQ3mLf0yJ' },
    { id:'v4', thumb:4, dur:'2:39:09',
      title:{ en:'Lists, Links, Images & Tables — Chapters 4 to 8',
              fa:'فصل‌های ۴ تا ۸: لیست‌ها، لینک‌ها، تصویرها و جدول‌ها',
              it:'Capitoli da 4 a 8: liste, link, immagini e tabelle' },
      meta:{ en:'Chapters 4–8 · Lists, links, images, tables', fa:'فصل ۴ تا ۸ · لیست‌ها، لینک‌ها، تصاویر و جدول', it:'Capitoli 4–8 · Liste, link, immagini e tabelle' },
      thumbFile:'youtube-html-chapters-4-8.jpg',
      url:'https://youtu.be/shgFLpXS09A?si=4R85ysQAFLj2Nm-T' }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    { q:{ en:'Are the courses really free?',
          fa:'آیا دوره‌ها واقعاً رایگان هستند؟',
          it:'I corsi sono davvero gratuiti?' },
      a:{ en:'Yes — the entire free track is free forever, with no card required. It covers HTML and CSS fundamentals and ends with a real project you can publish.',
          fa:'بله — کل مسیر رایگان برای همیشه رایگان است و نیازی به کارت بانکی نیست. مبانی HTML و CSS را پوشش می‌دهد و با یک پروژه‌ی واقعی و قابل انتشار تمام می‌شود.',
          it:'Sì — l\u2019intero percorso gratuito è gratis per sempre, senza carta. Copre le basi di HTML e CSS e si conclude con un progetto reale pubblicabile.' } },
    { q:{ en:'What is included in premium courses?',
          fa:'دوره‌های پرمیوم شامل چه چیزهایی است؟',
          it:'Cosa include il corso premium?' },
      a:{ en:' The premium course code is a little more complex and contains somewhat more advanced sections.',
          fa:' کدهای دوره‌ی پولی کمی پیچیده‌تر هستند و بخش‌های کمی پیشرفته‌تری در آن‌ها وجود دارد.',
          it:' I codici del corso a pagamento sono un po\' più complessi e contengono sezioni leggermente più avanzate.' } },
    { q:{ en:'How long do I have access?',
          fa:'تا چه مدت دسترسی دارم؟',
          it:'Per quanto tempo ho accesso?' },
      a:{ en:'Lifetime access to everything you buy, including all future updates to that course or template.',
          fa:'دسترسی مادام‌العمر به هر آنچه می‌خرید، به‌همراه تمام به‌روزرسانی‌های آینده‌ی همان دوره یا قالب.',
          it:'Accesso a vita a tutto ciò che acquisti, inclusi tutti gli aggiornamenti futuri.' } },
    { q:{ en:'Do you offer custom projects?',
          fa:'پروژه‌ی سفارشی هم انجام می‌دهید؟',
          it:'Realizzi progetti su misura?' },
      a:{ en:'Yes — I take a small number of freelance builds each quarter: landing pages, portfolios and small business sites. Send a brief through the contact form and you get a fixed price within 48 hours.',
          fa:'بله — هر فصل تعداد محدودی پروژه‌ی فریلنس می‌پذیرم: لندینگ‌پیج، نمونه‌کار و سایت کسب‌وکارهای کوچک. از طریق فرم تماس توضیح دهید تا ظرف 48 ساعت قیمت مقطوع دریافت کنید.',
          it:'Sì — accetto alcuni progetti freelance ogni trimestre: landing page, portfolio e siti aziendali. Invia un brief dal modulo e ricevi un prezzo fisso entro 48 ore.' } }
  ],

  /* ---------- COURSES & COMPONENTS ----------
     tab: free | premium | components
     kind: course (Q&A accordion) | component (feature list + code)
     price: null for free items, USD number for premium
     code: escaped HTML snippet used for the Download button
     All text fields are { en, fa } — Italian falls back to English.   */
  courses: [
    /* ================= FREE — HTML ================= */
    { id:'html-s1', tab:'free', kind:'course', topic:'html', price:null, likes:312,
      sess:{ en:'Session 1', fa:'جلسه اول', it:'Lezione 1' },
      title:{ en:'Some basics about HTML', fa:'مبانی HTML و ساخت اولین صفحه وب', it:'Basi di HTML e prima pagina web' },
      desc:{ en:'What HTML is, semantic tags, head vs body, and creating your very first HTML5 web page.', fa:'HTML چیست، تگ‌های معنایی، تفاوت head و body و ساخت اولین صفحه وب با HTML5.', it:'Cos\'è HTML, tag semantici, head e body, e creazione della prima pagina web.' },
      starter:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My first page</title>\n</head>\n<body>\n  <header>\n    <h1>Hello HTML!</h1>\n  </header>\n  <main>\n    <p>This is my first paragraph.</p>\n    <p>Edit me and press Output!</p>\n  </main>\n  <footer>\n    <p>Made with HTML</p>\n  </footer>\n</body>\n</html>',
      qa:[
        { q:{ en:'What is HTML5?', fa:'HTML5 چیست؟' },
          a:{ en:'<p><b>HTML5</b> is the <b>5th major version</b> of HTML — the language of the web. Released in <b>2014</b>, it made web pages much more powerful: <b>semantic tags</b> like <code>&lt;header&gt;</code> and <code>&lt;main&gt;</code>, native <b>audio</b> and <b>video</b>, canvas drawing, and full support on every device — phone, tablet and laptop.</p><p>Every HTML5 page is built from <b>2 main parts</b> — plus a first line that introduces the document:</p><div class="ans-grid"><div class="ans-card ans-card--head"><h5>&lt;head&gt; — The “Brain”</h5><p>Works <b>behind the scenes</b>: the title, meta tags and CSS links. Nothing here is shown on the page.</p></div><div class="ans-card ans-card--body"><h5>&lt;body&gt; — The “Body”</h5><p>Everything the user <b>sees</b>: headings, text, images, buttons — the visible stage.</p></div></div><h5>Document creation — the Document Type Declaration</h5><p><b>What it is:</b> <code>&lt;!DOCTYPE html&gt;</code> is the very first line of any HTML page.<br><b>What it does:</b> it tells the browser “This is an HTML5 page” so the page renders in modern standards mode. Example:</p><div class="ans-code annotated"><pre class="annotated__lines"><code>&lt;!DOCTYPE html&gt;\n&lt;html lang="en"&gt;\n  &lt;head&gt;\n    &lt;title&gt;My page&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello world!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><div class="abrace abrace--head" style="--top:2;--lines:3"><span class="abrace__label">head</span></div><div class="abrace abrace--body" style="--top:5;--lines:3"><span class="abrace__label">body</span></div></div><p>This is like telling the browser: “Hey, get ready to read an HTML page!” It makes sure everything works properly.</p><h5>The <code>&lt;body&gt;</code> section — the “Body”</h5><p><b>What it is:</b> it contains everything that is <b>visible</b> on the page.<br><b>What it does:</b> it holds all the content users can see, read and interact with. Example:</p><pre class="ans-code"><code>&lt;body&gt;                         &larr; everything visible\n  &lt;h1&gt;Welcome to my page&lt;/h1&gt;   &larr; big heading\n  &lt;p&gt;A short paragraph.&lt;/p&gt;     &larr; text block\n  &lt;img src="photo.jpg" alt=""&gt;  &larr; image\n&lt;/body&gt;</code></pre><p>The <code>&lt;body&gt;</code> is everything you see on the page — text, images, buttons, links. If it is visible to the user, it belongs in the body.</p>',
              fa:'<p><b>HTML5</b> <b>نسخه‌ی پنجم</b> اصلی HTML است — زبان وب. در سال <b>۲۰۱۴</b> منتشر شد و صفحه‌های وب را خیلی قدرتمندتر کرد: <b>تگ‌های معنایی</b> مثل <code>&lt;header&gt;</code> و <code>&lt;main&gt;</code>، <b>صدا و ویدیوی</b>، رسم با canvas و پشتیبانی کامل روی همه‌ی دستگاه‌ها — گوشی، تبلت و لپ‌تاپ.</p><p>هر صفحه‌ی HTML5 از <b>۲ بخش اصلی</b> ساخته شده است — به‌علاوه‌ی یک خط اول که سند را معرفی می‌کند:</p><div class="ans-grid"><div class="ans-card ans-card--head"><h5>&lt;head&gt; — «هد»</h5><p><b>پشت صحنه</b> کار می‌کند: عنوان، متا تگ‌ها و لینک CSS. هیچ‌کدام در صفحه نمایش داده نمی‌شوند.</p></div><div class="ans-card ans-card--body"><h5>&lt;body&gt; — «بدنه»</h5><p>هر چیزی که کاربر <b>می‌بیند</b>: تیترها، متن، تصویر و دکمه — صحنه‌ی قابل مشاهده.</p></div></div><h5>ساخت سند — اعلامیه‌ی نوع سند (Document Type Declaration)</h5><p><b>چیست:</b> <code>&lt;!DOCTYPE html&gt;</code> اولین خط هر صفحه‌ی HTML است.<br><b>چه می‌کند:</b> به مرورگر می‌گوید «این یک صفحه‌ی HTML5 است» تا صفحه در حالت استاندارد مدرن رندر شود. مثال:</p><div class="ans-code annotated"><pre class="annotated__lines"><code>&lt;!DOCTYPE html&gt;\n&lt;html lang="en"&gt;\n  &lt;head&gt;\n    &lt;title&gt;My page&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello world!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><div class="abrace abrace--head" style="--top:2;--lines:3"><span class="abrace__label">«هد»</span></div><div class="abrace abrace--body" style="--top:5;--lines:3"><span class="abrace__label">«بدن»</span></div></div><p>مثل این است که به مرورگر بگوییم: «هی، آماده‌ی خواندن یک صفحه‌ی HTML شو!» این کار تضمین می‌کند همه‌چیز درست کار کند.</p><h5>بخش <code>&lt;body&gt;</code> — «بدن»</h5><p><b>چیست:</b> هر چیزی که روی صفحه <b>قابل مشاهده</b> است.<br><b>چه می‌کند:</b> همه‌ی محتوایی را نگه می‌دارد که کاربر می‌بیند، می‌خواند و با آن تعامل دارد. مثال:</p><pre class="ans-code"><code>&lt;body&gt;                         &larr; همه‌چیزِ قابل مشاهده\n  &lt;h1&gt;Welcome to my page&lt;/h1&gt;   &larr; تیتر بزرگ\n  &lt;p&gt;A short paragraph.&lt;/p&gt;     &larr; بلوک متن\n  &lt;img src="photo.jpg" alt=""&gt;  &larr; تصویر\n&lt;/body&gt;</code></pre><p><code>&lt;body&gt;</code> هر چیزی است که در صفحه می‌بینید — متن، تصویر، دکمه، لینک. اگر چیزی برای کاربر قابل مشاهده است، جای آن در body است.</p>' } },

          { q:{ en:'What is a tag, and how does the browser see it?', fa:'تگ چیست و مرورگر آن را چطور می‌بیند؟' },
          a:{ en:'A <b>tag</b> is a small instruction written between angle brackets, like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code> or <code>&lt;img&gt;</code>. It tells the browser what the content inside it is.<br>Most tags come in <b>pairs</b>: an opening tag <code>&lt;p&gt;</code> and a closing tag <code>&lt;/p&gt;</code> (with a forward slash). The pair — opening + closing — is called an <b>element</b>. Together they are like the head of the family: the opening tag opens the box, the closing tag closes it, and everything between them is the content.<br>Some tags are self-closing, like <code>&lt;img&gt;</code> and <code>&lt;br&gt;</code> — they don\u2019t need a pair.<h5>Example</h5><pre class="ans-code"><code>&lt;p&gt;Hello!&lt;/p&gt;            &larr; &lt;p&gt; = paragraph (a pair: open + close)\n&lt;h1&gt;Title&lt;/h1&gt;           &larr; &lt;h1&gt; = biggest heading\n&lt;img src="cat.jpg"&gt;     &larr; &lt;img&gt; = image (self-closing)\n&lt;br&gt;                    &larr; line break (no pair needed)</code></pre>',
              fa:'<b>تگ</b> یک دستور کوچک است که بین دو علامت «کمتر از» و «بیشتر از» نوشته می‌شود؛ مثل <code>&lt;p&gt;</code>، <code>&lt;h1&gt;</code> یا <code>&lt;img&gt;</code>. به مرورگر می‌گوید محتوای داخلش چیست.<br>بیشتر تگ‌ها <b>جفت</b> هستند: تگ شروع <code>&lt;p&gt;</code> و تگ پایان <code>&lt;/p&gt;</code> (با اسلش). این جفت — شروع و پایان — یک <b>عنصر</b> (element) می‌سازد. آن‌ها با هم مثل سرِ خانواده‌اند: تگ شروع جعبه را باز می‌کند و تگ پایان آن را می‌بندد؛ هر چه بینشان است محتواست.<br>بعضی تگ‌ها خود-بسته‌شونده‌اند، مثل <code>&lt;img&gt;</code> و <code>&lt;br&gt;</code> — جفت ندارند.<h5>مثال</h5><pre class="ans-code"><code>&lt;p&gt;Hello!&lt;/p&gt;            &larr; &lt;p&gt; = پاراگراف (جفت: شروع و پایان)\n&lt;h1&gt;Title&lt;/h1&gt;           &larr; &lt;h1&gt; = بزرگ‌ترین تیتر\n&lt;img src="cat.jpg"&gt;     &larr; &lt;img&gt; = تصویر (خود-بسته‌شونده)\n&lt;br&gt;                    &larr; شکست خط (بدون جفت)</code></pre>' } },
        { q:{ en:'What is the head tag used for?', fa:'تگ head برای چه کاری استفاده می‌شود؟' },
          a:{ en:'The <code>&lt;head&gt;</code> is the <b>control room</b> of the page. It holds information <b>about</b> the page, not the page itself:<ul><li><code>&lt;title&gt;</code> — shown in the browser tab;</li><li><code>&lt;meta name="description"&gt;</code> — the summary search engines use;</li><li>charset — so letters display correctly;</li><li>viewport — the setting that makes pages responsive on phones;</li><li><code>&lt;link&gt;</code> — connects your CSS file.</li></ul>Nothing inside the head is displayed on the page — but almost everything important about the page lives here.<h5>Example — what each tag inside the head does</h5><div class="ans-code annotated"><pre class="annotated__lines"><code>&lt;!DOCTYPE html&gt;\n&lt;html lang="en"&gt;\n  &lt;head&gt;                      &larr; page info (not shown)\n    &lt;title&gt;My page&lt;/title&gt;    &larr; text in the browser tab\n    &lt;meta charset="utf-8"&gt;    &larr; letters display correctly\n    &lt;link rel="stylesheet" href="style.css"&gt;  &larr; connects CSS\n  &lt;/head&gt;\n  &lt;body&gt;                      &larr; visible content\n    &lt;h1&gt;Hello!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><div class="abrace abrace--head" style="--top:2;--lines:5"><span class="abrace__label">head</span></div><div class="abrace abrace--body" style="--top:7;--lines:3"><span class="abrace__label">body</span></div></div>',
              fa:'<code>&lt;head&gt;</code> <b>اتاق فرمان</b> صفحه است؛ اطلاعاتِ درباره‌ی صفحه را نگه می‌دارد، نه خود صفحه را:<ul><li><code>&lt;title&gt;</code> — چیزی که در زبانه‌ی مرورگر دیده می‌شود؛</li><li><code>&lt;meta name="description"&gt;</code> — خلاصه‌ای که موتورهای جستجو استفاده می‌کنند؛</li><li>charset — تا حروف درست نمایش داده شوند؛</li><li>viewport — تنظیمی که صفحه را روی گوشی ریسپانسیو می‌کند؛</li><li><code>&lt;link&gt;</code> — فایل CSS شما را وصل می‌کند.</li></ul>هیچ‌چیز داخل head در صفحه نمایش داده نمی‌شود — اما تقریباً هر چیز مهم درباره‌ی صفحه اینجاست.<h5>مثال — هر تگ داخل head چه کاری انجام می‌دهد</h5><div class="ans-code annotated"><pre class="annotated__lines"><code>&lt;!DOCTYPE html&gt;\n&lt;html lang="en"&gt;\n  &lt;head&gt;                      &larr; اطلاعات صفحه (نمایش داده نمی‌شود)\n    &lt;title&gt;My page&lt;/title&gt;    &larr; متن زبانه‌ی مرورگر\n    &lt;meta charset="utf-8"&gt;    &larr; حروف درست نمایش داده می‌شوند\n    &lt;link rel="stylesheet" href="style.css"&gt;  &larr; اتصال CSS\n  &lt;/head&gt;\n  &lt;body&gt;                      &larr; محتوای قابل مشاهده\n    &lt;h1&gt;Hello!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><div class="abrace abrace--head" style="--top:2;--lines:5"><span class="abrace__label">«هد»</span></div><div class="abrace abrace--body" style="--top:7;--lines:3"><span class="abrace__label">«بدن»</span></div></div>' } },
        { q:{ en:'What are the body, main and footer tags used for?', fa:'تگ‌های body، main و footer برای چه کاری استفاده می‌شوند؟' },
          a:{ en:'<code>&lt;body&gt;</code> holds <b>everything the user sees</b>: text, images, links, buttons. Inside it we use semantic structure tags:<ul><li><code>&lt;main&gt;</code> — the main, unique content of the page. Only one per page; screen readers jump straight to it.</li><li><code>&lt;header&gt;</code> — the top of the page or of a section.</li><li><code>&lt;nav&gt;</code> — navigation menus.</li><li><code>&lt;section&gt;</code> / <code>&lt;article&gt;</code> — organize content into blocks.</li><li><code>&lt;footer&gt;</code> — closes the page with copyright, quick links and contact details.</li></ul>These tags have no visual style by themselves — they give <b>meaning</b>, and meaning helps browsers, screen readers and search engines.<h5>Example</h5><pre class="ans-code"><code>&lt;body&gt;               &larr; everything the user sees\n  &lt;header&gt;…&lt;/header&gt; &larr; top of the page / a section\n  &lt;main&gt;…&lt;/main&gt;     &larr; the main, unique content\n  &lt;footer&gt;…&lt;/footer&gt; &larr; bottom: copyright + links\n&lt;/body&gt;</code></pre>',
              fa:'<code>&lt;body&gt;</code> <b>هر چیزی که کاربر می‌بیند</b> را در خودش دارد: متن، تصویر، لینک و دکمه. داخل آن از تگ‌های ساختاری معنایی استفاده می‌کنیم:<ul><li><code>&lt;main&gt;</code> — محتوای اصلی و یکتای صفحه. فقط یک‌بار در هر صفحه؛ صفحه‌خوان‌ها مستقیم به آن می‌پرند.</li><li><code>&lt;header&gt;</code> — بالای صفحه یا بالای یک بخش.</li><li><code>&lt;nav&gt;</code> — منوهای پیمایش.</li><li><code>&lt;section&gt;</code> / <code>&lt;article&gt;</code> — محتوا را به بلوک‌های منظم تقسیم می‌کنند.</li><li><code>&lt;footer&gt;</code> — صفحه را با کپی‌رایت، لینک‌های سریع و اطلاعات تماس می‌بندد.</li></ul>این تگ‌ها خودشان ظاهر خاصی ندارند — <b>معنا</b> می‌دهند و معنا به مرورگر، صفحه‌خوان و موتور جستجو کمک می‌کند.<h5>مثال</h5><pre class="ans-code"><code>&lt;body&gt;               &larr; هر چیزی که کاربر می‌بیند\n  &lt;header&gt;…&lt;/header&gt; &larr; بالای صفحه یا یک بخش\n  &lt;main&gt;…&lt;/main&gt;     &larr; محتوای اصلی و یکتا\n  &lt;footer&gt;…&lt;/footer&gt; &larr; پایین: کپی‌رایت و لینک‌ها\n&lt;/body&gt;</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'What is HTML5?', fa:'HTML5 چیست؟' }, opts:[{ en:'A programming language like Python', fa:'یک زبان برنامه‌نویسی مثل پایتون' },{ en:'The 5th major version of HTML', fa:'نسخه‌ی پنجم اصلی HTML' },{ en:'A CSS framework', fa:'یک فریم‌ورک CSS' },{ en:'A database system', fa:'یک سیستم پایگاه‌داده' }], a:1 },
        { q:{ en:'Where does the visible content of a page live?', fa:'محتوای قابل مشاهده‌ی صفحه کجا قرار می‌گیرد؟' }, opts:[{ en:'In the head', fa:'در head' },{ en:'In the body', fa:'در body' },{ en:'In the title', fa:'در title' },{ en:'In the meta', fa:'در meta' }], a:1 },
        { q:{ en:'What does &lt;!DOCTYPE html&gt; tell the browser?', fa:'&lt;!DOCTYPE html&gt; به مرورگر چه می‌گوید؟' }, opts:[{ en:'This page is HTML5', fa:'این صفحه HTML5 است' },{ en:'To load CSS', fa:'CSS را بارگذاری کن' },{ en:'The page language', fa:'زبان صفحه' },{ en:'Nothing important', fa:'چیز مهمی نیست' }], a:0 }
      ],
      ex:[
        { lines:['&lt;!DOCTYPE [blank]&gt;','&lt;html lang="en"&gt;','  &lt;head&gt;','  &lt;/head&gt;','  &lt;body&gt;','  &lt;/body&gt;','&lt;/html&gt;'], ans:'html' },
        { lines:['&lt;!DOCTYPE html&gt;','&lt;html lang="en"&gt;','  &lt;[blank]&gt;','    &lt;title&gt;My page&lt;/title&gt;','  &lt;/head&gt;','&lt;/html&gt;'], ans:'head' }
      ],
      },

    { id:'html-s2', tab:'free', kind:'course', topic:'html', price:null, likes:268,
      sess:{ en:'Session 2', fa:'جلسه دوم', it:'Lezione 2' },
      title:{ en:'How browsers read your HTML', fa:'مرورگرها چطور HTML شما را می‌خوانند', it:'Come i browser leggono il tuo HTML' },
      desc:{ en:'The journey of a web page, the superpowers of HTML, and why it is not a programming language.', fa:'مسیر یک صفحه وب، ابرقدرت‌های HTML و اینکه چرا زبان برنامه‌نویسی نیست.', it:'Il percorso di una pagina web, i superpoteri di HTML e perché non è un linguaggio di programmazione.' },
      starter:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Semantic layout</title>\n</head>\n<body>\n  <header>\n    <h1>My blog</h1>\n    <nav><a href="#">Home</a> <a href="#">Posts</a></nav>\n  </header>\n  <main>\n    <article>\n      <h2>First post</h2>\n      <p>Semantic tags give meaning to this page.</p>\n    </article>\n    <aside><p>Try changing the tags and press Output.</p></aside>\n  </main>\n  <footer><p>Copyright 2026</p></footer>\n</body>\n</html>',
      qa:[
        { q:{ en:'How do web browsers interact with HTML?', fa:'مرورگرها چگونه با HTML تعامل می‌کنند؟' },
          a:{ en:'The browser is the <b>translator</b> of your HTML. Here is the journey of a page:<ol><li>You type a URL and press Enter.</li><li>The browser asks the server: “send me the HTML file”.</li><li>The browser receives the file and <b>parses</b> (reads) the HTML line by line.</li><li>It builds the <b>DOM</b> — the Document Object Model, a family tree of every element on the page.</li><li>It applies <b>CSS</b> to style each element and runs <b>JavaScript</b> for behavior.</li><li>It <b>renders</b> (paints) the final pixels on your screen.</li></ol>Important: the browser never shows your code — it shows the <b>result</b> of your code. Change the HTML, the DOM changes, the page updates. That is the whole interaction: request → parse → build → style → paint.<h5>Example — the journey of a page</h5><pre class="ans-code"><code>URL &rarr; request &rarr; HTML file &rarr; parse &rarr; DOM &rarr; style &rarr; paint\n\n&lt;h1&gt;Hello&lt;/h1&gt;    &larr; the browser reads this line\n&lt;p&gt;Text&lt;/p&gt;      &larr; and builds a DOM tree from it</code></pre>',
              fa:'مرورگر <b>مترجم</b> HTML شماست. مسیر یک صفحه این‌طور است:<ol><li>آدرس را تایپ می‌کنید و Enter می‌زنید.</li><li>مرورگر از سرور می‌خواهد: «فایل HTML را بفرست».</li><li>مرورگر فایل را می‌گیرد و HTML را خط‌به‌خط <b>می‌خواند</b> (parse).</li><li><b>DOM</b> را می‌سازد — Document Object Model، درختی خانوادگی از همه‌ی عناصر صفحه.</li><li><b>CSS</b> را اعمال می‌کند تا هر عنصر استایل بگیرد و <b>جاوااسکریپت</b> را برای رفتار اجرا می‌کند.</li><li>پیکسل‌های نهایی را روی صفحه <b>می‌کشد</b> (render).</li></ol>نکته‌ی مهم: مرورگر هیچ‌وقت کد شما را نشان نمی‌دهد — <b>نتیجه‌ی</b> کد شما را نشان می‌دهد. HTML را عوض کنید، DOM عوض می‌شود و صفحه به‌روز می‌شود. پس کل تعامل همین است: درخواست ← خواندن ← ساختن ← استایل ← کشیدن.<h5>مثال — مسیر یک صفحه</h5><pre class="ans-code"><code>URL &rarr; درخواست &rarr; فایل HTML &rarr; خواندن &rarr; DOM &rarr; استایل &rarr; کشیدن\n\n&lt;h1&gt;Hello&lt;/h1&gt;    &larr; مرورگر این خط را می‌خواند\n&lt;p&gt;Text&lt;/p&gt;      &larr; و از آن درخت DOM می‌سازد</code></pre>' } },
        { q:{ en:'What makes HTML so powerful?', fa:'چه چیزی HTML را این‌قدر قدرتمند کرده است؟' },
          a:{ en:'HTML is a <b>very friendly language</b> — and that friendliness is its superpower:<ul><li><b>Human-readable and forgiving</b> — you can read a page\u2019s source like a book.</li><li><b>Universal</b> — every browser, every device, every operating system understands it.</li><li><b>The foundation of the web</b> — every site you have ever visited is built on it.</li><li><b>Semantic</b> — tags carry meaning (<code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code>), which powers SEO and screen readers.</li><li><b>Plays well with everything</b> — CSS, JavaScript, frameworks like React: HTML is the common language between them all.</li></ul>The web is the largest system humans have ever built — and HTML is the language it speaks.<h5>Example — semantic tags carry meaning</h5><pre class="ans-code"><code>&lt;article&gt;…&lt;/article&gt;  &larr; a self-contained story\n&lt;nav&gt;…&lt;/nav&gt;          &larr; navigation menu\n&lt;footer&gt;…&lt;/footer&gt;    &larr; page footer\n&lt;aside&gt;…&lt;/aside&gt;      &larr; extra, related content</code></pre>',
              fa:'HTML یک <b>زبان خیلی دوستانه</b> است — و همین دوستانه‌بودن ابرقدرت آن است:<ul><li><b>خوانا و بخشنده</b> — می‌توانید سورس هر صفحه را مثل کتاب بخوانید.</li><li><b>جهانی</b> — هر مرورگر، هر دستگاه و هر سیستم‌عاملی آن را می‌فهمد.</li><li><b>پایه‌ی وب</b> — هر سایتی که تا حالا دیده‌اید روی آن ساخته شده است.</li><li><b>معنایی</b> — تگ‌ها معنا دارند (<code>&lt;article&gt;</code>، <code>&lt;nav&gt;</code>، <code>&lt;footer&gt;</code>) و همین SEO و صفحه‌خوان‌ها را تقویت می‌کند.</li><li><b>با همه‌چیز سازگار</b> — CSS، جاوااسکریپت و فریم‌ورک‌هایی مثل React: HTML زبان مشترک همه‌ی آن‌هاست.</li></ul>وب بزرگ‌ترین سیستمی است که بشر ساخته — و HTML زبانی است که وب با آن حرف می‌زند.<h5>مثال — تگ‌های معنایی معنا دارند</h5><pre class="ans-code"><code>&lt;article&gt;…&lt;/article&gt;  &larr; یک داستان مستقل\n&lt;nav&gt;…&lt;/nav&gt;          &larr; منوی پیمایش\n&lt;footer&gt;…&lt;/footer&gt;    &larr; فوتر صفحه\n&lt;aside&gt;…&lt;/aside&gt;      &larr; محتوای جانبی مرتبط</code></pre>' } },
        { q:{ en:'Why is HTML not a programming language?', fa:'چرا HTML زبان برنامه‌نویسی نیست؟' },
          a:{ en:'A programming language needs <b>logic</b>: variables, conditions (if/else), loops, functions, math. HTML has none of these — it cannot calculate, decide, or repeat. It cannot even add 1 + 1.<br>HTML is a <b>markup language</b>: it marks up (labels) content. It answers “what is this?” — this is a heading, this is a paragraph — never “what should happen?”.<br>Think of a building: <b>HTML</b> is the bricks and structure, <b>CSS</b> is the paint and decoration, <b>JavaScript</b> is the electricity and plumbing — the behavior. That is exactly why HTML is the perfect first step: you learn structure without fighting logic.<h5>Example — HTML has no logic</h5><pre class="ans-code"><code>&lt;p&gt;1 + 1&lt;/p&gt;        &larr; HTML only displays text\n&lt;!-- no if, no loop, no variables --&gt;\n&lt;p&gt;1 + 1 = 2&lt;/p&gt;  &larr; the browser does NOT calculate it</code></pre>',
              fa:'زبان برنامه‌نویسی به <b>منطق</b> نیاز دارد: متغیر، شرط (if/else)، حلقه، تابع و محاسبه. HTML هیچ‌کدام را ندارد — نمی‌تواند محاسبه کند، تصمیم بگیرد یا تکرار کند؛ حتی نمی‌تواند ۱+۱ را حساب کند.<br>HTML یک <b>زبان نشانه‌گذاری</b> (markup) است: محتوا را برچسب می‌زند. به «این چیست؟» جواب می‌دهد — این یک تیتر است، این یک پاراگراف — نه به «چه اتفاقی باید بیفتد؟».<br>مثل یک ساختمان فکر کنید: <b>HTML</b> آجر و اسکلت است، <b>CSS</b> رنگ و دکور، <b>جاوااسکریپت</b> برق و لوله‌کشی — رفتار. برای همین HTML بهترین قدم اول است: بدون درگیری با منطق، ساختار را یاد می‌گیرید.<h5>مثال — HTML منطق ندارد</h5><pre class="ans-code"><code>&lt;p&gt;1 + 1&lt;/p&gt;        &larr; HTML فقط متن نمایش می‌دهد\n&lt;!-- نه if، نه حلقه، نه متغیر --&gt;\n&lt;p&gt;1 + 1 = 2&lt;/p&gt;  &larr; مرورگر آن را محاسبه نمی‌کند</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'What does the browser build from your HTML?', fa:'مرورگر از HTML شما چه می‌سازد؟' }, opts:[{ en:'The DOM — a tree of elements', fa:'DOM — درختی از عنصرها' },{ en:'A PDF file', fa:'یک فایل PDF' },{ en:'A database', fa:'یک پایگاه‌داده' },{ en:'A picture', fa:'یک عکس' }], a:0 },
        { q:{ en:'Which is the correct order for a page?', fa:'ترتیب درست چیست؟' }, opts:[{ en:'style → parse → request', fa:'استایل ← خواندن ← درخواست' },{ en:'request → parse → render', fa:'درخواست ← خواندن ← رندر' },{ en:'render → request → parse', fa:'رندر ← درخواست ← خواندن' },{ en:'parse → request → style', fa:'خواندن ← درخواست ← استایل' }], a:1 },
        { q:{ en:'Is HTML a programming language?', fa:'آیا HTML زبان برنامه‌نویسی است؟' }, opts:[{ en:'Yes, like JavaScript', fa:'بله، مثل جاوااسکریپت' },{ en:'No — it is a markup language', fa:'نه — یک زبان نشانه‌گذاری است' },{ en:'Only in HTML5', fa:'فقط در HTML5' },{ en:'Only with CSS', fa:'فقط با CSS' }], a:1 }
      ],
      ex:[
        { lines:['&lt;[blank]&gt;Hello&lt;/h1&gt;'], ans:'h1' },
        { lines:['&lt;!DOCTYPE [blank]&gt;','&lt;html&gt;','&lt;/html&gt;'], ans:'html' }
      ],
      },


    { id:'html-s3', tab:'free', kind:'course', topic:'html', price:null, likes:221,
      sess:{ en:'Session 3', fa:'جلسه سوم', it:'Lezione 3' },
      title:{ en:'Lists, links and images', fa:'لیست‌ها، لینک‌ها و تصاویر', it:'Liste, link e immagini' },
      desc:{ en:'Build real page content: lists for groups, links for paths, and images with honest alt text.', fa:'محتوای واقعی صفحه را بساز: لیست برای گروه‌ها، لینک برای مسیرها و تصویر با متن جایگزین درست.', it:'Crea contenuti reali: elenchi, collegamenti ipertestuali e immagini con testo alternativo accessibile.' },
      starter:'<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Lists, links and images</title>\\n</head>\\n<body>\\n  <header>\\n    <h1>Weekend in Amsterdam</h1>\\n    <nav>\\n      <a href="#places">Places</a>\\n      <a href="https://www.iamsterdam.com">City guide</a>\\n    </nav>\\n  </header>\\n  <main id="places">\\n    <h2>What to see</h2>\\n    <ul>\\n      <li>Canal belt</li>\\n      <li>Rijksmuseum</li>\\n      <li>Vondelpark</li>\\n    </ul>\\n    <p><img src="https://picsum.photos/seed/canal/480/240" alt="A quiet Amsterdam canal with bicycles" width="480" height="240"></p>\\n  </main>\\n  <footer><p>Made with HTML</p></footer>\\n</body>\\n</html>',
      qa:[
        { q:{ en:'How do I make a list in HTML?', fa:'چطور در HTML لیست بسازم؟' },
          a:{ en:'<p>Use <code>&lt;ul&gt;</code> for a <b>bullet list</b> and <code>&lt;ol&gt;</code> for a <b>numbered list</b>. Each item is an <code>&lt;li&gt;</code>. Lists are for groups that belong together — steps, menus, ingredients — not for layout.</p><h5>Example</h5><pre class="ans-code"><code>&lt;ul&gt;\\n  &lt;li&gt;Tea&lt;/li&gt;\\n  &lt;li&gt;Coffee&lt;/li&gt;\\n&lt;/ul&gt;\\n&lt;ol&gt;\\n  &lt;li&gt;Boil water&lt;/li&gt;\\n  &lt;li&gt;Pour&lt;/li&gt;\\n&lt;/ol&gt;</code></pre>',
              fa:'<p>برای <b>لیست نقطه‌ای</b> از <code>&lt;ul&gt;</code> و برای <b>لیست شماره‌دار</b> از <code>&lt;ol&gt;</code> استفاده کنید. هر مورد یک <code>&lt;li&gt;</code> است. لیست برای چیزهایی است که با هم یک گروه می‌سازند — مراحل، منو، مواد — نه برای چیدمان.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;ul&gt;\\n  &lt;li&gt;چای&lt;/li&gt;\\n  &lt;li&gt;قهوه&lt;/li&gt;\\n&lt;/ul&gt;\\n&lt;ol&gt;\\n  &lt;li&gt;آب را بجوشان&lt;/li&gt;\\n  &lt;li&gt;بریز&lt;/li&gt;\\n&lt;/ol&gt;</code></pre>' } },
        { q:{ en:'How do links work?', fa:'لینک‌ها چطور کار می‌کنند؟' },
          a:{ en:'<p>The <code>&lt;a&gt;</code> tag is a path. The <code>href</code> attribute is the destination: another page, a section on this page (<code>#id</code>), or an email. The text inside the tag should describe the destination — never “click here”.</p><h5>Example</h5><pre class="ans-code"><code>&lt;a href="https://example.com"&gt;Example site&lt;/a&gt;\\n&lt;a href="#about"&gt;About this page&lt;/a&gt;</code></pre>',
              fa:'<p>تگ <code>&lt;a&gt;</code> یک مسیر است. ویژگی <code>href</code> مقصد را می‌گوید: صفحه دیگر، بخشی در همین صفحه (<code>#id</code>) یا ایمیل. متن داخل تگ باید مقصد را توصیف کند — هرگز «اینجا کلیک کنید» ننویسید.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;a href="https://example.com"&gt;سایت نمونه&lt;/a&gt;\\n&lt;a href="#about"&gt;درباره این صفحه&lt;/a&gt;</code></pre>' } },
        { q:{ en:'How do I add an image the right way?', fa:'چطور تصویر را درست اضافه کنم؟' },
          a:{ en:'<p><code>&lt;img&gt;</code> is self-closing. Always set <code>src</code>, an honest <code>alt</code>, and <code>width</code>/<code>height</code> so the page does not jump. If the image is only decoration, use <code>alt=""</code>.</p><h5>Example</h5><pre class="ans-code"><code>&lt;img src="canal.jpg"\\n     alt="Amsterdam canal at dusk"\\n     width="400" height="220"&gt;</code></pre>',
              fa:'<p><code>&lt;img&gt;</code> خود-بسته‌شونده است. همیشه <code>src</code>، یک <code>alt</code> صادقانه و <code>width</code>/<code>height</code> بگذارید تا صفحه نپرد. اگر تصویر فقط تزئینی است، <code>alt=""</code> کافی است.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;img src="canal.jpg"\\n     alt="کانال آمستردام هنگام غروب"\\n     width="400" height="220"&gt;</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'Which tag makes a numbered list?', fa:'کدام تگ لیست شماره‌دار می‌سازد؟' }, opts:[{ en:'ul', fa:'ul' },{ en:'ol', fa:'ol' },{ en:'li', fa:'li' },{ en:'nav', fa:'nav' }], a:1 },
        { q:{ en:'What does href hold?', fa:'href چه چیزی را نگه می‌دارد؟' }, opts:[{ en:'The image file', fa:'فایل تصویر' },{ en:'The link destination', fa:'مقصد لینک' },{ en:'The page title', fa:'عنوان صفحه' },{ en:'A color', fa:'یک رنگ' }], a:1 },
        { q:{ en:'Why does every image need alt?', fa:'چرا هر تصویر به alt نیاز دارد؟' }, opts:[{ en:'To make it bigger', fa:'تا بزرگ‌تر شود' },{ en:'So screen readers and broken images still make sense', fa:'تا صفحه‌خوان و تصویر خراب هنوز معنا داشته باشند' },{ en:'To load CSS', fa:'برای بارگذاری CSS' },{ en:'It is optional decoration', fa:'فقط تزئین اختیاری است' }], a:1 }
      ],
      ex:[
        { lines:['&lt;ul&gt;','  &lt;[blank]&gt;Milk&lt;/li&gt;','&lt;/ul&gt;'], ans:'li' },
        { lines:['&lt;a [blank]="https://example.com"&gt;Visit&lt;/a&gt;'], ans:'href' }
      ],
      },
    { id:'html-s4', tab:'free', kind:'course', topic:'html', price:null, likes:198,
      sess:{ en:'Session 4', fa:'جلسه چهارم', it:'Lezione 4' },
      title:{ en:'Tables and forms', fa:'جدول‌ها و فرم‌ها', it:'Tabelle e moduli' },
      desc:{ en:'Structure data in tables and collect answers with labels, inputs and a real submit button.', fa:'داده را در جدول بچین و پاسخ‌ها را با برچسب، ورودی و یک دکمه ارسال واقعی جمع کن.', it:'Struttura i dati in tabelle e raccogli informazioni con etichette, campi input e pulsanti di invio.' },
      starter:'<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Tables and forms</title>\\n</head>\\n<body>\\n  <header><h1>Book a seat</h1></header>\\n  <main>\\n    <table>\\n      <thead><tr><th>Time</th><th>Seats</th></tr></thead>\\n      <tbody>\\n        <tr><td>10:00</td><td>4 left</td></tr>\\n        <tr><td>14:00</td><td>Full</td></tr>\\n      </tbody>\\n    </table>\\n    <form action="#" method="get">\\n      <p>\\n        <label for="name">Your name</label>\\n        <input id="name" name="name" type="text" required>\\n      </p>\\n      <p>\\n        <label for="mail">Email</label>\\n        <input id="mail" name="email" type="email" required>\\n      </p>\\n      <button type="submit">Send</button>\\n    </form>\\n  </main>\\n</body>\\n</html>',
      qa:[
        { q:{ en:'How is an HTML table built?', fa:'جدول HTML چطور ساخته می‌شود؟' },
          a:{ en:'<p>A table is a grid of meaning: <code>&lt;table&gt;</code> wraps it, <code>&lt;thead&gt;</code> holds titles, <code>&lt;tbody&gt;</code> holds data, each row is <code>&lt;tr&gt;</code>, headers are <code>&lt;th&gt;</code> and cells are <code>&lt;td&gt;</code>. Use a table for data — never to draw a whole page layout.</p><h5>Example</h5><pre class="ans-code"><code>&lt;table&gt;\\n  &lt;tr&gt;&lt;th&gt;Day&lt;/th&gt;&lt;th&gt;Open&lt;/th&gt;&lt;/tr&gt;\\n  &lt;tr&gt;&lt;td&gt;Mon&lt;/td&gt;&lt;td&gt;9–17&lt;/td&gt;&lt;/tr&gt;\\n&lt;/table&gt;</code></pre>',
              fa:'<p>جدول یک شبکه معنایی است: <code>&lt;table&gt;</code> آن را می‌پوشاند، <code>&lt;thead&gt;</code> عنوان‌ها را دارد، <code>&lt;tbody&gt;</code> داده را، هر ردیف <code>&lt;tr&gt;</code> است، تیتر <code>&lt;th&gt;</code> و سلول <code>&lt;td&gt;</code>. جدول برای داده است — نه برای کشیدن چیدمان کل صفحه.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;table&gt;\\n  &lt;tr&gt;&lt;th&gt;روز&lt;/th&gt;&lt;th&gt;باز&lt;/th&gt;&lt;/tr&gt;\\n  &lt;tr&gt;&lt;td&gt;دوشنبه&lt;/td&gt;&lt;td&gt;۹–۱۷&lt;/td&gt;&lt;/tr&gt;\\n&lt;/table&gt;</code></pre>' } },
        { q:{ en:'What does a form need?', fa:'یک فرم به چه چیزی نیاز دارد؟' },
          a:{ en:'<p>A <code>&lt;form&gt;</code> groups fields that are sent together. Give every input a <code>&lt;label&gt;</code> tied with <code>for</code> and <code>id</code>, pick the right <code>type</code> (<code>email</code>, <code>text</code>, <code>number</code>), and use a real <code>&lt;button type="submit"&gt;</code>.</p><h5>Example</h5><pre class="ans-code"><code>&lt;form&gt;\\n  &lt;label for="mail"&gt;Email&lt;/label&gt;\\n  &lt;input id="mail" type="email"&gt;\\n  &lt;button type="submit"&gt;Send&lt;/button&gt;\\n&lt;/form&gt;</code></pre>',
              fa:'<p><code>&lt;form&gt;</code> فیلدهایی را که با هم ارسال می‌شوند گروه می‌کند. به هر input یک <code>&lt;label&gt;</code> با <code>for</code> و <code>id</code> بدهید، <code>type</code> درست را انتخاب کنید و از یک <code>&lt;button type="submit"&gt;</code> واقعی استفاده کنید.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;form&gt;\\n  &lt;label for="mail"&gt;ایمیل&lt;/label&gt;\\n  &lt;input id="mail" type="email"&gt;\\n  &lt;button type="submit"&gt;ارسال&lt;/button&gt;\\n&lt;/form&gt;</code></pre>' } },
        { q:{ en:'Why must a label be tied to its input?', fa:'چرا label باید به input وصل باشد؟' },
          a:{ en:'<p>Clicking the label then focuses the field — helpful on phones and for motor disabilities. Screen readers announce the label when the input is focused. The pair is <code>for="name"</code> on the label and <code>id="name"</code> on the input.</p><h5>Example</h5><pre class="ans-code"><code>&lt;label for="name"&gt;Name&lt;/label&gt;\\n&lt;input id="name" type="text"&gt;</code></pre>',
              fa:'<p>کلیک روی برچسب فیلد را فوکوس می‌کند — روی گوشی و برای محدودیت حرکتی مفید است. صفحه‌خوان وقتی input فوکوس دارد برچسب را می‌خواند. جفت درست: <code>for="name"</code> روی label و <code>id="name"</code> روی input.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;label for="name"&gt;نام&lt;/label&gt;\\n&lt;input id="name" type="text"&gt;</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'A table header cell is…', fa:'سلول تیتر جدول کدام است؟' }, opts:[{ en:'td', fa:'td' },{ en:'th', fa:'th' },{ en:'tr', fa:'tr' },{ en:'p', fa:'p' }], a:1 },
        { q:{ en:'A label connects to an input with…', fa:'label با input با چه چیزی وصل می‌شود؟' }, opts:[{ en:'class and name', fa:'class و name' },{ en:'for and id', fa:'for و id' },{ en:'src and href', fa:'src و href' },{ en:'alt and title', fa:'alt و title' }], a:1 },
        { q:{ en:'Which button sends a form?', fa:'کدام دکمه فرم را می‌فرستد؟' }, opts:[{ en:'type="button"', fa:'type="button"' },{ en:'type="submit"', fa:'type="submit"' },{ en:'a div', fa:'یک div' },{ en:'type="reset" only', fa:'فقط type="reset"' }], a:1 }
      ],
      ex:[
        { lines:['&lt;tr&gt;&lt;[blank]&gt;Name&lt;/th&gt;&lt;/tr&gt;'], ans:'th' },
        { lines:['&lt;label [blank]="mail"&gt;Email&lt;/label&gt;'], ans:'for' }
      ],
      },
    /* ================= FREE — CSS ================= */
    { id:'css-s1', tab:'free', kind:'course', topic:'css', price:null, likes:341,
      sess:{ en:'Session 1', fa:'جلسه اول', it:'Lezione 1' },
      title:{ en:'CSS first steps', fa:'قدم‌های اول CSS و سلکتورها', it:'Primi passi con CSS e selettori' },
      desc:{ en:'What CSS is, the three ways to attach it to HTML, and the selector that targets elements.', fa:'CSS چیست، سه راه اتصال آن به HTML و سلکتوری که عنصرها را هدف می‌گیرد.', it:'Cos\'è il CSS, i tre modi per collegarlo ad HTML e i selettori per gli elementi.' },
      starter:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>CSS first steps</title>\n  <style>\n    h1 { color: #7C3AED; font-family: Arial, sans-serif; }\n    p  { color: #333; font-size: 1.1rem; }\n  </style>\n</head>\n<body>\n  <h1>Styled by CSS</h1>\n  <p>This paragraph is styled too. Change the colors and press Output!</p>\n</body>\n</html>',
      qa:[
        { q:{ en:'What is CSS and what does it stand for?', fa:'CSS چیست و مخفف چیست؟' },
          a:{ en:'CSS stands for <b>Cascading Style Sheets</b> — the language of styling the web: colors, fonts, spacing, borders, layout, animation. CSS works together with HTML — <b>HTML is the structure, CSS is the look</b>.<br>Its greatest power is <b>separation</b>: one stylesheet can restyle an entire website, and you can change the design without touching a single line of HTML. “Cascading” means rules flow from general to specific, and the most specific rule wins.<h5>Example</h5><pre class="ans-code"><code>&lt;style&gt;\n  p { color: red; }              &larr; every &lt;p&gt; turns red\n  .btn { background: gold; }     &larr; class selector\n&lt;/style&gt;</code></pre>',
              fa:'CSS مخفف <b>Cascading Style Sheets</b> است — برگه‌های سبک آبشاری؛ زبانِ استایل‌دادن به وب: رنگ‌ها، فونت‌ها، فاصله‌ها، حاشیه‌ها، چیدمان و انیمیشن. CSS کنار HTML کار می‌کند — <b>HTML ساختار است و CSS ظاهر</b>.<br>بزرگ‌ترین قدرت آن <b>جداسازی</b> است: با یک فایل استایل می‌توانید ظاهر کل سایت را عوض کنید بدون اینکه یک خط HTML را لمس کنید. «آبشاری» یعنی قوانین از کلی به خاص جریان می‌یابند و خاص‌ترین قانون برنده است.<h5>مثال</h5><pre class="ans-code"><code>&lt;style&gt;\n  p { color: red; }              &larr; همه‌ی &lt;p&gt;ها قرمز می‌شوند\n  .btn { background: gold; }     &larr; سلکتور کلاس\n&lt;/style&gt;</code></pre>' } },
        { q:{ en:'How do we attach CSS to HTML?', fa:'چطور CSS را به HTML وصل می‌کنیم؟' },
          a:{ en:'Three ways:<ol><li><b>External file (best practice)</b>: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> inside the <code>&lt;head&gt;</code>. One file — cached and reused on every page.</li><li><b>Internal</b>: a <code>&lt;style&gt;</code> tag inside the <code>&lt;head&gt;</code> — fine for a single page.</li><li><b>Inline</b>: a <code>style</code> attribute directly on a tag — quick but messy; avoid it.</li></ol>Rule of thumb: external for real projects, internal for small demos, inline almost never.<h5>Example — the three ways</h5><pre class="ans-code"><code>&lt;link rel="stylesheet" href="style.css"&gt;   &larr; external (best)\n&lt;style&gt; p { color: red; } &lt;/style&gt;          &larr; internal\n&lt;p style="color:red"&gt;Hi&lt;/p&gt;                &larr; inline (avoid)</code></pre>',
              fa:'سه راه:<ol><li><b>فایل خارجی (بهترین روش)</b>: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> داخل <code>&lt;head&gt;</code>. یک فایل که کش می‌شود و در همه‌ی صفحات استفاده می‌شود.</li><li><b>داخلی</b>: تگ <code>&lt;style&gt;</code> داخل <code>&lt;head&gt;</code> — برای یک صفحه‌ی تنها خوب است.</li><li><b>اینلاین</b>: ویژگی <code>style</code> مستقیم روی خود تگ — سریع اما به‌هم‌ریخته؛ از آن اجتناب کنید.</li></ol>قاعده‌ی کلی: برای پروژه‌های واقعی خارجی، برای دموهای کوچک داخلی، و اینلاین تقریباً هرگز.<h5>مثال — سه راه اتصال</h5><pre class="ans-code"><code>&lt;link rel="stylesheet" href="style.css"&gt;   &larr; خارجی (بهترین)\n&lt;style&gt; p { color: red; } &lt;/style&gt;          &larr; داخلی\n&lt;p style="color:red"&gt;Hi&lt;/p&gt;                &larr; اینلاین (اجتناب کنید)</code></pre>' } },
        { q:{ en:'What is a selector?', fa:'سلکتور چیست؟' },
          a:{ en:'A selector is the part of a CSS rule that decides <b>which elements</b> the style applies to — it comes before the <code>{ }</code>:<ul><li><b>Element selector</b> — <code>p { color: red; }</code> styles every paragraph.</li><li><b>Class selector</b> — <code>.btn { }</code>; reusable, the workhorse of CSS.</li><li><b>ID selector</b> — <code>#hero { }</code>; unique, only one element.</li></ul>There are more: attribute selectors, pseudo-classes like <code>:hover</code>, combinators like <code>nav &gt; a</code>. <b>Specificity</b> decides conflicts: id beats class, class beats element, and later rules beat earlier ones.<h5>Example</h5><pre class="ans-code"><code>p { color: red; }          &larr; element selector: every &lt;p&gt;\n.btn { padding: 8px; }    &larr; class selector: reusable\n#hero { height: 100vh; }  &larr; id selector: one unique element</code></pre>',
              fa:'سلکتور بخشی از قانون CSS است که مشخص می‌کند استایل روی <b>کدام عنصرها</b> اعمال شود — قبل از <code>{ }</code> می‌آید:<ul><li><b>سلکتور عنصر</b> — <code>p { color: red; }</code> همه‌ی پاراگراف‌ها را استایل می‌دهد.</li><li><b>سلکتور کلاس</b> — <code>.btn { }</code>؛ قابل‌استفاده‌ی مجدد؛ ستون فقرات CSS.</li><li><b>سلکتور id</b> — <code>#hero { }</code>؛ یکتا؛ فقط برای یک عنصر.</li></ul>بیشتر هم هست: سلکتور ویژگی، شبه‌کلاس‌هایی مثل <code>:hover</code> و ترکیب‌گرهایی مثل <code>nav &gt; a</code>. <b>اختصاصی‌بودن</b> (specificity) اختلاف‌ها را حل می‌کند: id از کلاس قوی‌تر است، کلاس از عنصر، و قانون‌های بعدی بر قانون‌های قبلی می‌چربند.<h5>مثال</h5><pre class="ans-code"><code>p { color: red; }          &larr; سلکتور عنصر: همه‌ی &lt;p&gt;ها\n.btn { padding: 8px; }    &larr; سلکتور کلاس: قابل استفاده‌ی مجدد\n#hero { height: 100vh; }  &larr; سلکتور id: یک عنصر یکتا</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'CSS stands for…', fa:'CSS مخفف چیست؟' }, opts:[{ en:'Creative Style Sheets', fa:'Creative Style Sheets' },{ en:'Cascading Style Sheets', fa:'Cascading Style Sheets' },{ en:'Computer Styling System', fa:'Computer Styling System' },{ en:'Color Style System', fa:'Color Style System' }], a:1 },
        { q:{ en:'The best way to attach CSS to HTML?', fa:'بهترین راه اتصال CSS به HTML؟' }, opts:[{ en:'External file with a link tag', fa:'فایل خارجی با تگ link' },{ en:'Inline style on every tag', fa:'استایل اینلاین روی هر تگ' },{ en:'A Word document', fa:'یک سند ورد' },{ en:'A database', fa:'یک پایگاه‌داده' }], a:0 },
        { q:{ en:'Which selector styles every p on the page?', fa:'کدام سلکتور همه‌ی pها را استایل می‌دهد؟' }, opts:[{ en:'p { }', fa:'p { }' },{ en:'.p { }', fa:'.p { }' },{ en:'#p { }', fa:'#p { }' },{ en:'<p> { }', fa:'<p> { }' }], a:0 }
      ],
      ex:[
        { lines:['[blank] { color: red; }','&lt;p&gt;This turns red&lt;/p&gt;'], ans:'p' },
        { lines:['&lt;link rel="stylesheet" href="[blank]"&gt;'], ans:'style.css' }
      ],
      },

    { id:'css-s2', tab:'free', kind:'course', topic:'css', price:null, likes:295,
      sess:{ en:'Session 2', fa:'جلسه دوم', it:'Lezione 2' },
      title:{ en:'Box model, colors & fonts', fa:'باکس‌مدل، رنگ‌ها و فونت‌ها', it:'Box model, colori e font' },
      desc:{ en:'The four layers of every element, a clean color-and-font system, and painless centering.', fa:'چهار لایه‌ی هر عنصر، یک سیستم تمیز رنگ و فونت، و وسط‌چین‌کردن بدون دردسر.', it:'I quattro strati di ogni elemento, sistema di colori e tipografia, e tecniche di allineamento.' },
      starter:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Box model</title>\n  <style>\n    .box {\n      width: 200px;\n      padding: 20px;\n      border: 4px solid #4F7DF3;\n      margin: 30px auto;\n      background: #eef2ff;\n      text-align: center;\n      border-radius: 10px;\n    }\n  </style>\n</head>\n<body>\n  <div class="box">I am a box!</div>\n  <div class="box" style="border-color:#A855F7">Me too — try editing the padding.</div>\n</body>\n</html>',
      qa:[
        { q:{ en:'What is the box model?', fa:'باکس‌مدل چیست؟' },
          a:{ en:'Every element on a web page is a <b>rectangular box</b>, and the box model describes its four layers:<ol><li><b>content</b> — the text or image in the middle;</li><li><b>padding</b> — space between content and border (inside the box);</li><li><b>border</b> — the visible edge;</li><li><b>margin</b> — space outside the box that separates it from neighbors.</li></ol>Pro tip: add <code>box-sizing: border-box</code> globally, so width includes padding and border — layout math becomes much easier.<h5>Example — the four layers of a box</h5><pre class="ans-code"><code>.box {\n  content: the text;      &larr; the middle\n  padding: 20px;          &larr; inside, around content\n  border: 2px solid;      &larr; the visible edge\n  margin: 30px;           &larr; outside, space around\n}</code></pre>',
              fa:'هر عنصر در صفحه‌ی وب یک <b>جعبه‌ی مستطیلی</b> است و باکس‌مدل چهار لایه‌ی آن را توصیف می‌کند:<ol><li><b>محتوا</b> — متن یا تصویر وسط؛</li><li><b>پدینگ</b> — فاصله‌ی بین محتوا و حاشیه (داخل جعبه)؛</li><li><b>حاشیه</b> — لبه‌ی قابل مشاهده؛</li><li><b>مارجین</b> — فاصله‌ی بیرون جعبه که آن را از همسایه‌ها جدا می‌کند.</li></ol>نکته‌ی طلایی: <code>box-sizing: border-box</code> را سراسری بگذارید تا width شامل پدینگ و حاشیه شود — ریاضی چیدمان خیلی راحت‌تر می‌شود.<h5>مثال — چهار لایه‌ی یک جعبه</h5><pre class="ans-code"><code>.box {\n  content: the text;      &larr; وسط\n  padding: 20px;          &larr; داخل، دور محتوا\n  border: 2px solid;      &larr; لبه‌ی قابل مشاهده\n  margin: 30px;           &larr; بیرون، فاصله‌ی اطراف\n}</code></pre>' } },
        { q:{ en:'How do I choose colors and fonts?', fa:'چطور رنگ و فونت انتخاب کنم؟' },
          a:{ en:'Colors can be written as names (<code>tomato</code>), hex codes (<code>#4F7DF3</code>), <code>rgb()</code> or <code>hsl()</code>. Best practice: define your palette <b>once</b> as CSS variables in <code>:root</code>, then use <code>var(--brand-a)</code> everywhere — change one line, restyle the whole site.<br>For fonts: pick <b>two families maximum</b> (one for headings, one for body), load them with one <code>&lt;link&gt;</code> from Google Fonts, always provide fallbacks like <code>font-family: &#39;Inter&#39;, sans-serif</code>, and size text with <code>rem</code> so it respects the user\u2019s browser settings.<h5>Example</h5><pre class="ans-code"><code>h1 {\n  color: #4F7DF3;                  &larr; hex color\n  font-family: &#39;Inter&#39;, sans-serif; &larr; font + fallback\n  font-size: 1.5rem;                &larr; rem respects user settings\n}</code></pre>',
              fa:'رنگ‌ها را می‌توان با نام (<code>tomato</code>)، کد هگز (<code>#4F7DF3</code>)، <code>rgb()</code> یا <code>hsl()</code> نوشت. بهترین روش: پالت را <b>یک‌بار</b> به‌صورت متغیر CSS در <code>:root</code> تعریف کنید و همه‌جا از <code>var(--brand-a)</code> استفاده کنید — یک خط عوض کنید، کل سایت رنگ عوض می‌کند.<br>برای فونت: حداکثر <b>دو خانواده</b> (یکی برای تیترها، یکی برای متن)، با یک <code>&lt;link&gt;</code> از Google Fonts بارگذاری کنید، همیشه fallback بگذارید مثل <code>font-family: &#39;Inter&#39;, sans-serif</code> و اندازه‌ها را با <code>rem</code> بنویسید تا تنظیمات مرورگر کاربر رعایت شود.<h5>مثال</h5><pre class="ans-code"><code>h1 {\n  color: #4F7DF3;                  &larr; رنگ هگز\n  font-family: &#39;Inter&#39;, sans-serif; &larr; فونت + جایگزین\n  font-size: 1.5rem;                &larr; rem تنظیمات کاربر را رعایت می‌کند\n}</code></pre>' } },
        { q:{ en:'How do I center elements?', fa:'چطور عنصرها را وسط‌چین کنم؟' },
          a:{ en:'It depends on what you are centering:<ul><li><b>text</b> — <code>text-align: center;</code></li><li><b>a block</b> (like a button) — <code>margin-inline: auto;</code></li><li><b>anything in both directions</b> — <code>display: grid; place-items: center;</code></li><li><b>two elements side by side</b> — <code>display: flex; align-items: center; justify-content: center;</code></li></ul>The flexbox/grid methods work in 99% of cases — master them and centering stops being a struggle.<h5>Example</h5><pre class="ans-code"><code>text:   text-align: center;\nblock:  margin-inline: auto;\nboth:   display: grid; place-items: center;\nside:   display: flex; align-items: center; justify-content: center;</code></pre>',
              fa:'بستگی دارد چه چیزی را وسط می‌کنید:<ul><li><b>متن</b> — <code>text-align: center;</code></li><li><b>یک بلوک</b> (مثل دکمه) — <code>margin-inline: auto;</code></li><li><b>هر چیزی در هر دو جهت</b> — <code>display: grid; place-items: center;</code></li><li><b>دو عنصر کنار هم</b> — <code>display: flex; align-items: center; justify-content: center;</code></li></ul>روش‌های فلکس‌باکس و گرید در ۹۹٪ موارد جواب می‌دهند — آن‌ها را یاد بگیرید تا وسط‌چین‌کردن دیگر دردسر نباشد.<h5>مثال</h5><pre class="ans-code"><code>متن:   text-align: center;\nبلوک:  margin-inline: auto;\nهر دو: display: grid; place-items: center;\nکناری: display: flex; align-items: center; justify-content: center;</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'What sits between content and border?', fa:'بین محتوا و حاشیه چه چیزی است؟' }, opts:[{ en:'margin', fa:'margin' },{ en:'padding', fa:'padding' },{ en:'gap', fa:'gap' },{ en:'spacing', fa:'فاصله' }], a:1 },
        { q:{ en:'How do you center TEXT?', fa:'متن را چطور وسط‌چین می‌کنید؟' }, opts:[{ en:'margin-inline: auto', fa:'margin-inline: auto' },{ en:'text-align: center', fa:'text-align: center' },{ en:'display: grid', fa:'display: grid' },{ en:'float: center', fa:'float: center' }], a:1 },
        { q:{ en:'Which unit respects the user\'s font settings?', fa:'کدام واحد تنظیمات فونت کاربر را رعایت می‌کند؟' }, opts:[{ en:'px', fa:'px' },{ en:'vw', fa:'vw' },{ en:'rem', fa:'rem' },{ en:'pt', fa:'pt' }], a:2 }
      ],
      ex:[
        { lines:['.box { [blank]: 20px; }','.box { border: 2px solid; }'], ans:'padding' },
        { lines:['h1 { font-size: [blank](1rem, 4vw, 3rem); }'], ans:'clamp' }
      ],
      },


    { id:'css-s3', tab:'free', kind:'course', topic:'css', price:null, likes:187,
      sess:{ en:'Session 3', fa:'جلسه سوم', it:'Lezione 3' },
      title:{ en:'Flexbox layout', fa:'چیدمان فلکس‌باکس', it:'Layout con Flexbox' },
      desc:{ en:'Line up items in a row or a column, space them evenly, and wrap them on small screens.', fa:'آیتم‌ها را در یک ردیف یا ستون بچین، فاصله‌شان را یکنواخت کن و در صفحه کوچک جمع‌شان کن.', it:'Allinea elementi in riga o colonna, distribuisci gli spazi e gestisci il wrap sui piccoli schermi.' },
      starter:'<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Flexbox layout</title>\\n  <style>\\n    .row{display:flex;gap:12px;flex-wrap:wrap}\\n    .card{flex:1 1 140px;padding:1rem;border-radius:10px;background:#4F7DF3;color:#fff;text-align:center}\\n  </style>\\n</head>\\n<body>\\n  <header><h1>Three cards in a row</h1></header>\\n  <main>\\n    <div class="row">\\n      <article class="card">One</article>\\n      <article class="card">Two</article>\\n      <article class="card">Three</article>\\n    </div>\\n  </main>\\n</body>\\n</html>',
      qa:[
        { q:{ en:'What does display:flex do?', fa:'display:flex چه می‌کند؟' },
          a:{ en:'<p><code>display:flex</code> turns a box into a <b>flex container</b>. Its children become flex items and sit on one axis — a row by default. This is the fastest way to build a navbar, a row of cards, or a centered group.</p><h5>Example</h5><pre class="ans-code"><code>&lt;style&gt;\\n  .row { display:flex; gap:12px; }\\n&lt;/style&gt;\\n&lt;div class="row"&gt;\\n  &lt;div&gt;A&lt;/div&gt;&lt;div&gt;B&lt;/div&gt;&lt;div&gt;C&lt;/div&gt;\\n&lt;/div&gt;</code></pre>',
              fa:'<p><code>display:flex</code> جعبه را به <b>ظرف فلکس</b> تبدیل می‌کند. فرزندان روی یک محور می‌نشینند — پیش‌فرض ردیف است. سریع‌ترین راه برای منو، ردیف کارت یا یک گروه وسط‌چین همین است.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;style&gt;\\n  .row { display:flex; gap:12px; }\\n&lt;/style&gt;\\n&lt;div class="row"&gt;\\n  &lt;div&gt;A&lt;/div&gt;&lt;div&gt;B&lt;/div&gt;&lt;div&gt;C&lt;/div&gt;\\n&lt;/div&gt;</code></pre>' } },
        { q:{ en:'How do I space and wrap items?', fa:'چطور آیتم‌ها را فاصله بدهم و بشکنم؟' },
          a:{ en:'<p>Use <code>gap</code> for space between items, <code>justify-content</code> for the main axis, and <code>flex-wrap:wrap</code> so items drop to the next line instead of overflowing.</p><h5>Example</h5><pre class="ans-code"><code>.row {\\n  display:flex;\\n  justify-content:space-between;\\n  flex-wrap:wrap;\\n  gap:1rem;\\n}</code></pre>',
              fa:'<p>برای فاصله از <code>gap</code>، برای محور اصلی از <code>justify-content</code> و برای شکستن خط از <code>flex-wrap:wrap</code> استفاده کنید تا آیتم‌ها از ظرف بیرون نزنند.</p><h5>مثال</h5><pre class="ans-code"><code>.row {\\n  display:flex;\\n  justify-content:space-between;\\n  flex-wrap:wrap;\\n  gap:1rem;\\n}</code></pre>' } },
        { q:{ en:'What does flex:1 mean on an item?', fa:'flex:1 روی یک آیتم یعنی چه؟' },
          a:{ en:'<p><code>flex:1</code> means “grow and share the leftover space equally”. Three cards with <code>flex:1</code> stay the same width. Add a basis like <code>flex:1 1 160px</code> so they wrap instead of becoming too thin.</p><h5>Example</h5><pre class="ans-code"><code>.card { flex:1 1 160px; }</code></pre>',
              fa:'<p><code>flex:1</code> یعنی «بزرگ شو و فضای باقی‌مانده را مساوی تقسیم کن». سه کارت با <code>flex:1</code> هم‌عرض می‌مانند. با <code>flex:1 1 160px</code> در صفحه تنگ به خط بعد می‌روند.</p><h5>مثال</h5><pre class="ans-code"><code>.card { flex:1 1 160px; }</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'display:flex lines items up on…', fa:'display:flex آیتم‌ها را روی…' }, opts:[{ en:'One axis', fa:'یک محور' },{ en:'A circle', fa:'یک دایره' },{ en:'The z-axis only', fa:'فقط محور z' },{ en:'The server', fa:'سرور' }], a:0 },
        { q:{ en:'Which property adds space BETWEEN items?', fa:'کدام ویژگی بین آیتم‌ها فاصله می‌گذارد؟' }, opts:[{ en:'padding', fa:'padding' },{ en:'gap', fa:'gap' },{ en:'font-size', fa:'font-size' },{ en:'color', fa:'color' }], a:1 },
        { q:{ en:'flex-wrap:wrap does what?', fa:'flex-wrap:wrap چه می‌کند؟' }, opts:[{ en:'Hides overflow', fa:'سرریز را پنهان می‌کند' },{ en:'Lets items move to the next line', fa:'آیتم‌ها را به خط بعد می‌برد' },{ en:'Changes color', fa:'رنگ را عوض می‌کند' },{ en:'Removes the container', fa:'ظرف را حذف می‌کند' }], a:1 }
      ],
      ex:[
        { lines:['.row { display: [blank]; gap: 12px; }'], ans:'flex' },
        { lines:['.row { flex-[blank]: wrap; }'], ans:'wrap' }
      ],
      },
    { id:'css-s4', tab:'free', kind:'course', topic:'css', price:null, likes:174,
      sess:{ en:'Session 4', fa:'جلسه چهارم', it:'Lezione 4' },
      title:{ en:'Hover, motion and a responsive page', fa:'هاور، حرکت و صفحه ریسپانسیو', it:'Hover, animazioni e pagina responsive' },
      desc:{ en:'Make buttons feel alive with :hover and transition, then adapt the layout for phones.', fa:'دکمه‌ها را با :hover و transition زنده کن و بعد چیدمان را برای گوشی سازگار کن.', it:'Rendi i pulsanti interattivi con :hover e transizioni, e adatta il layout per smartphone.' },
      starter:'<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Hover and responsive</title>\\n  <style>\\n    .btn{display:inline-block;padding:.8em 1.4em;border-radius:999px;background:#7C3AED;color:#fff;text-decoration:none;transition:transform .25s,background .25s}\\n    .btn:hover{transform:translateY(-3px);background:#4F7DF3}\\n    .wrap{display:flex;gap:1rem}\\n    @media (max-width:600px){.wrap{flex-direction:column}}\\n  </style>\\n</head>\\n<body>\\n  <header><h1>Try the button</h1></header>\\n  <main>\\n    <div class="wrap">\\n      <a class="btn" href="#">Start lesson</a>\\n      <a class="btn" href="#">Next session</a>\\n    </div>\\n  </main>\\n</body>\\n</html>',
      qa:[
        { q:{ en:'What is :hover?', fa:':hover چیست؟' },
          a:{ en:'<p><code>:hover</code> is a <b>pseudo-class</b> — a state. The rule applies only while the pointer is over the element. Use it for feedback, not for hiding important content (there is no hover on most phones).</p><h5>Example</h5><pre class="ans-code"><code>a:hover { color: gold; }</code></pre>',
              fa:'<p><code>:hover</code> یک <b>شبه‌کلاس</b> است — یک حالت. قانون فقط وقتی اعمال می‌شود که نشانگر روی عنصر باشد. برای بازخورد استفاده کنید، نه برای پنهان کردن محتوای مهم (روی بیشتر گوشی‌ها hover نیست).</p><h5>مثال</h5><pre class="ans-code"><code>a:hover { color: gold; }</code></pre>' } },
        { q:{ en:'What does transition do?', fa:'transition چه می‌کند؟' },
          a:{ en:'<p><code>transition</code> animates a change instead of snapping. Name the property, the time, and the easing. Keep motion short — about 0.2s to 0.35s feels professional.</p><h5>Example</h5><pre class="ans-code"><code>.btn {\\n  background:#7C3AED;\\n  transition:background .25s ease, transform .25s ease;\\n}\\n.btn:hover {\\n  background:#4F7DF3;\\n  transform:translateY(-3px);\\n}</code></pre>',
              fa:'<p><code>transition</code> به‌جای پرش، تغییر را نرم می‌کند. ویژگی، زمان و easing را بنویسید. حرکت کوتاه بماند — حدود ۰٫۲ تا ۰٫۳۵ ثانیه حرفه‌ای به نظر می‌رسد.</p><h5>مثال</h5><pre class="ans-code"><code>.btn {\\n  background:#7C3AED;\\n  transition:background .25s ease, transform .25s ease;\\n}\\n.btn:hover {\\n  background:#4F7DF3;\\n  transform:translateY(-3px);\\n}</code></pre>' } },
        { q:{ en:'How do I make a row become a column on phones?', fa:'چطور ردیف را در گوشی به ستون تبدیل کنم؟' },
          a:{ en:'<p>Start with a flexible row, then use a <b>media query</b> when the screen is narrow. Always keep <code>&lt;meta name="viewport"&gt;</code> in the head or the query will not match real phones.</p><h5>Example</h5><pre class="ans-code"><code>.wrap { display:flex; gap:1rem; }\\n@media (max-width:600px) {\\n  .wrap { flex-direction:column; }\\n}</code></pre>',
              fa:'<p>با یک ردیف منعطف شروع کنید و وقتی صفحه تنگ شد با <b>مدیا کوئری</b> ستون کنید. <code>&lt;meta name="viewport"&gt;</code> را در head بگذارید وگرنه کوئری با گوشی واقعی جور نمی‌شود.</p><h5>مثال</h5><pre class="ans-code"><code>.wrap { display:flex; gap:1rem; }\\n@media (max-width:600px) {\\n  .wrap { flex-direction:column; }\\n}</code></pre>' } }
      ],
      quiz:[
        { q:{ en:':hover applies when…', fa:':hover کی اعمال می‌شود؟' }, opts:[{ en:'The pointer is over the element', fa:'نشانگر روی عنصر است' },{ en:'The page loads', fa:'صفحه بارگذاری می‌شود' },{ en:'The user prints', fa:'کاربر چاپ می‌کند' },{ en:'JavaScript is off', fa:'جاوااسکریپت خاموش است' }], a:0 },
        { q:{ en:'A good transition time is about…', fa:'زمان مناسب transition حدوداً…' }, opts:[{ en:'5 seconds', fa:'۵ ثانیه' },{ en:'0.25 seconds', fa:'۰٫۲۵ ثانیه' },{ en:'0 milliseconds', fa:'۰ میلی‌ثانیه' },{ en:'1 minute', fa:'۱ دقیقه' }], a:1 },
        { q:{ en:'Phones need which meta tag?', fa:'گوشی به کدام متا تگ نیاز دارد؟' }, opts:[{ en:'charset only', fa:'فقط charset' },{ en:'viewport', fa:'viewport' },{ en:'og:image', fa:'og:image' },{ en:'theme-color only', fa:'فقط theme-color' }], a:1 }
      ],
      ex:[
        { lines:['a:[blank] { color: gold; }'], ans:'hover' },
        { lines:['@media (max-[blank]:600px) { .wrap { flex-direction:column; } }'], ans:'width' }
      ],
      },

    /* ================= FREE — JAVASCRIPT ================= */
    { id:'js-s1', tab:'free', kind:'course', topic:'js', price:null, likes:163,
      sess:{ en:'Beginner', fa:'مبتدی', it:'Principiante' },
      title:{ en:'JavaScript for beginners', fa:'جاوااسکریپت برای مبتدی‌ها و متغیرها', it:'JavaScript per principianti e variabili' },
      desc:{ en:'What JavaScript is, how variables store values, and how a script talks to a page.', fa:'جاوااسکریپت چیست، متغیر چطور مقدار نگه می‌دارد و اسکریپت چطور با صفحه حرف می‌زند.', it:'Cos\'è JavaScript, come funzionano le variabili e come interagire con la pagina web.' },
      starter:'<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>JavaScript beginner</title>\\n</head>\\n<body>\\n  <header><h1 id="hello">Hello</h1></header>\\n  <main>\\n    <p id="note">The script will change this text.</p>\\n    <button id="go" type="button">Run script</button>\\n  </main>\\n  <script>\\n    var btn = document.getElementById("go");\\n    btn.addEventListener("click", function(){\\n      document.getElementById("hello").textContent = "Hello, Bahareh";\\n      document.getElementById("note").textContent = "The page listened to a click.";\\n    });\\n  <\\/script>\\n</body>\\n</html>',
      qa:[
        { q:{ en:'What is JavaScript?', fa:'جاوااسکریپت چیست؟' },
          a:{ en:'<p><b>JavaScript</b> is the language of <b>behavior</b> on the web. HTML is structure, CSS is look, JavaScript decides what happens: a click, a message, a calculation. It runs in the browser, after the page is read.</p><h5>Example</h5><pre class="ans-code"><code>&lt;p id="n"&gt;0&lt;/p&gt;\\n&lt;script&gt;\\n  document.getElementById("n").textContent = 1 + 1;\\n&lt;/script&gt;</code></pre>',
              fa:'<p><b>جاوااسکریپت</b> زبان <b>رفتار</b> در وب است. HTML ساختار است، CSS ظاهر، جاوااسکریپت تصمیم می‌گیرد چه اتفاقی بیفتد: کلیک، پیام، محاسبه. در مرورگر و بعد از خواندن صفحه اجرا می‌شود.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;p id="n"&gt;0&lt;/p&gt;\\n&lt;script&gt;\\n  document.getElementById("n").textContent = 1 + 1;\\n&lt;/script&gt;</code></pre>' } },
        { q:{ en:'What is a variable?', fa:'متغیر چیست؟' },
          a:{ en:'<p>A variable is a <b>named box</b> for a value. In modern JavaScript you declare it with <code>const</code> (does not change) or <code>let</code> (can change). Give it a clear name.</p><h5>Example</h5><pre class="ans-code"><code>&lt;pre id="out"&gt;&lt;/pre&gt;\\n&lt;script&gt;\\n  const course = "HTML";\\n  let likes = 10;\\n  likes = likes + 1;\\n  document.getElementById("out").textContent = course + " · " + likes;\\n&lt;/script&gt;</code></pre>',
              fa:'<p>متغیر یک <b>جعبه نام‌دار</b> برای مقدار است. در جاوااسکریپت مدرن با <code>const</code> (عوض نمی‌شود) یا <code>let</code> (می‌تواند عوض شود) ساخته می‌شود. اسم روشن بگذارید.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;pre id="out"&gt;&lt;/pre&gt;\\n&lt;script&gt;\\n  const course = "HTML";\\n  let likes = 10;\\n  likes = likes + 1;\\n  document.getElementById("out").textContent = course + " · " + likes;\\n&lt;/script&gt;</code></pre>' } },
        { q:{ en:'How does a script find an element?', fa:'اسکریپت چطور یک عنصر را پیدا می‌کند؟' },
          a:{ en:'<p><code>document.getElementById("go")</code> finds the element whose <code>id</code> is <code>go</code>. Then you can read or change <code>textContent</code>, or listen for a click. The <code>id</code> must be unique on the page.</p><h5>Example</h5><pre class="ans-code"><code>&lt;button id="go" type="button"&gt;Press&lt;/button&gt;\\n&lt;p id="msg"&gt;&lt;/p&gt;\\n&lt;script&gt;\\n  document.getElementById("go").onclick = function(){\\n    document.getElementById("msg").textContent = "Clicked";\\n  };\\n&lt;/script&gt;</code></pre>',
              fa:'<p><code>document.getElementById("go")</code> عنصری را پیدا می‌کند که <code>id</code> آن <code>go</code> است. بعد می‌توانید <code>textContent</code> را بخوانید یا عوض کنید، یا به کلیک گوش بدهید. <code>id</code> در صفحه باید یکتا باشد.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;button id="go" type="button"&gt;بزن&lt;/button&gt;\\n&lt;p id="msg"&gt;&lt;/p&gt;\\n&lt;script&gt;\\n  document.getElementById("go").onclick = function(){\\n    document.getElementById("msg").textContent = "کلیک شد";\\n  };\\n&lt;/script&gt;</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'JavaScript is mainly for…', fa:'جاوااسکریپت بیشتر برای…' }, opts:[{ en:'Page structure', fa:'ساختار صفحه' },{ en:'Page behavior', fa:'رفتار صفحه' },{ en:'Database storage', fa:'ذخیره پایگاه‌داده' },{ en:'Print layout only', fa:'فقط چیدمان چاپ' }], a:1 },
        { q:{ en:'Which keyword makes a box you can change?', fa:'کدام کلمه جعبه‌ای می‌سازد که عوض می‌شود؟' }, opts:[{ en:'const', fa:'const' },{ en:'let', fa:'let' },{ en:'html', fa:'html' },{ en:'href', fa:'href' }], a:1 },
        { q:{ en:'getElementById finds an element by its…', fa:'getElementById عنصر را با چه چیزی پیدا می‌کند؟' }, opts:[{ en:'class', fa:'class' },{ en:'id', fa:'id' },{ en:'color', fa:'رنگ' },{ en:'file name', fa:'نام فایل' }], a:1 }
      ],
      ex:[
        { lines:['let score = [blank];'], ans:'0' },
        { lines:['document.getElementById("[blank]")'], ans:'go' }
      ],
      },
    { id:'js-s2', tab:'free', kind:'course', topic:'js', price:null, likes:148,
      sess:{ en:'Advanced', fa:'پیشرفته', it:'Avanzato' },
      title:{ en:'JavaScript advanced — DOM and events', fa:'جاوااسکریپت پیشرفته — DOM و رویدادها', it:'JavaScript avanzato — DOM ed eventi' },
      desc:{ en:'Walk the DOM tree, listen for events, and change classes so the page reacts.', fa:'درخت DOM را بپیمای، به رویداد گوش بده و کلاس‌ها را عوض کن تا صفحه واکنش نشان دهد.', it:'Esplora l\'albero del DOM, ascolta gli eventi utente e modifica le classi dinamicamente.' },
      starter:'<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>DOM and events</title>\\n  <style>\\n    .box{padding:1.2rem;border-radius:12px;background:#1E2338;color:#fff;transition:background .25s}\\n    .box.is-on{background:#7C3AED}\\n  </style>\\n</head>\\n<body>\\n  <header><h1>Toggle a class</h1></header>\\n  <main>\\n    <div class="box" id="panel">I change when you click.</div>\\n    <p><button id="toggle" type="button">Toggle</button></p>\\n  </main>\\n  <script>\\n    var panel = document.getElementById("panel");\\n    var btn = document.getElementById("toggle");\\n    btn.addEventListener("click", function(){\\n      panel.classList.toggle("is-on");\\n    });\\n  <\\/script>\\n</body>\\n</html>',
      qa:[
        { q:{ en:'What is the DOM?', fa:'DOM چیست؟' },
          a:{ en:'<p>The <b>DOM</b> (Document Object Model) is the live tree the browser builds from your HTML. JavaScript does not edit the file — it edits this tree. Change a node, and the pixels on screen update.</p><h5>Example</h5><pre class="ans-code"><code>&lt;h1 id="t"&gt;Old&lt;/h1&gt;\\n&lt;script&gt;\\n  document.getElementById("t").textContent = "New";\\n&lt;/script&gt;</code></pre>',
              fa:'<p><b>DOM</b> (Document Object Model) درخت زنده‌ای است که مرورگر از HTML شما می‌سازد. جاوااسکریپت فایل را ویرایش نمی‌کند — این درخت را ویرایش می‌کند. یک گره را عوض کنید، پیکسل‌های صفحه به‌روز می‌شوند.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;h1 id="t"&gt;قدیمی&lt;/h1&gt;\\n&lt;script&gt;\\n  document.getElementById("t").textContent = "جدید";\\n&lt;/script&gt;</code></pre>' } },
        { q:{ en:'How do events work?', fa:'رویدادها چطور کار می‌کنند؟' },
          a:{ en:'<p>An event is something that happens: <code>click</code>, <code>input</code>, <code>submit</code>. <code>addEventListener</code> waits for that moment and then runs your function. This keeps HTML clean — no <code>onclick=</code> attributes.</p><h5>Example</h5><pre class="ans-code"><code>&lt;button id="b" type="button"&gt;Hi&lt;/button&gt;\\n&lt;p id="out"&gt;&lt;/p&gt;\\n&lt;script&gt;\\n  document.getElementById("b").addEventListener("click", function(){\\n    document.getElementById("out").textContent = "Hello";\\n  });\\n&lt;/script&gt;</code></pre>',
              fa:'<p>رویداد چیزی است که رخ می‌دهد: <code>click</code>، <code>input</code>، <code>submit</code>. <code>addEventListener</code> منتظر آن لحظه می‌ماند و بعد تابع شما را اجرا می‌کند. HTML تمیز می‌ماند — بدون ویژگی <code>onclick=</code>.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;button id="b" type="button"&gt;سلام&lt;/button&gt;\\n&lt;p id="out"&gt;&lt;/p&gt;\\n&lt;script&gt;\\n  document.getElementById("b").addEventListener("click", function(){\\n    document.getElementById("out").textContent = "سلام";\\n  });\\n&lt;/script&gt;</code></pre>' } },
        { q:{ en:'Why change a class instead of a style?', fa:'چرا به‌جای استایل، کلاس را عوض کنیم؟' },
          a:{ en:'<p><code>classList.toggle("is-on")</code> adds or removes a class. The look stays in CSS, the decision stays in JavaScript. That split is easier to read, reuse and animate.</p><h5>Example</h5><pre class="ans-code"><code>&lt;style&gt;.box.is-on{background:gold}&lt;/style&gt;\\n&lt;div class="box" id="p"&gt;Panel&lt;/div&gt;\\n&lt;button id="t" type="button"&gt;Toggle&lt;/button&gt;\\n&lt;script&gt;\\n  document.getElementById("t").onclick = function(){\\n    document.getElementById("p").classList.toggle("is-on");\\n  };\\n&lt;/script&gt;</code></pre>',
              fa:'<p><code>classList.toggle("is-on")</code> یک کلاس را اضافه یا حذف می‌کند. ظاهر در CSS می‌ماند و تصمیم در جاوااسکریپت. این جداسازی خواناتر، قابل‌استفاده مجدد و قابل‌انیمیشن است.</p><h5>مثال</h5><pre class="ans-code"><code>&lt;style&gt;.box.is-on{background:gold}&lt;/style&gt;\\n&lt;div class="box" id="p"&gt;پنل&lt;/div&gt;\\n&lt;button id="t" type="button"&gt;تغییر&lt;/button&gt;\\n&lt;script&gt;\\n  document.getElementById("t").onclick = function(){\\n    document.getElementById("p").classList.toggle("is-on");\\n  };\\n&lt;/script&gt;</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'The DOM is…', fa:'DOM چیست؟' }, opts:[{ en:'A CSS file', fa:'یک فایل CSS' },{ en:'The live tree of the page', fa:'درخت زنده صفحه' },{ en:'A database', fa:'یک پایگاه‌داده' },{ en:'The server log', fa:'لاگ سرور' }], a:1 },
        { q:{ en:'addEventListener waits for…', fa:'addEventListener منتظر چیست؟' }, opts:[{ en:'A font', fa:'یک فونت' },{ en:'An event such as click', fa:'رویدادی مثل click' },{ en:'A sitemap', fa:'یک سایت‌مپ' },{ en:'A color token', fa:'یک توکن رنگ' }], a:1 },
        { q:{ en:'classList.toggle does what?', fa:'classList.toggle چه می‌کند؟' }, opts:[{ en:'Deletes the element', fa:'عنصر را حذف می‌کند' },{ en:'Adds or removes a class', fa:'یک کلاس را اضافه یا حذف می‌کند' },{ en:'Loads an image', fa:'یک تصویر بارگذاری می‌کند' },{ en:'Changes the URL', fa:'آدرس را عوض می‌کند' }], a:1 }
      ],
      ex:[
        { lines:['element.addEventListener("[blank]", handler);'], ans:'click' },
        { lines:['panel.classList.[blank]("is-on");'], ans:'toggle' }
      ],
      },
    /* ================= PREMIUM — HTML ================= */
    { id:'html-p1', tab:'premium', kind:'course', topic:'html', price:19, likes:127,
      sess:{ en:'Session 1', fa:'جلسه اول', it:'Lezione 1' },
      title:{ en:'Semantic HTML & accessibility', fa:'HTML معنایی و دسترس‌پذیری', it:'HTML semantico e accessibilità' },
      desc:{ en:'Build pages that search engines rank and screen readers read fluently — with code review.', fa:'صفحه‌هایی بسازید که موتورهای جستجو رتبه می‌دهند و صفحه‌خوان‌ها روان می‌خوانند — همراه با بازبینی کد.', it:'Costruisci pagine ottimizzate per i motori di ricerca e accessibili a tutti, con revisione del codice.' },
      starter:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Accessibility demo</title>\n</head>\n<body>\n  <main>\n    <h1>Semantic + accessible form</h1>\n    <label for="note">Your note</label>\n    <input id="note" type="text" placeholder="Type here">\n    <p>This is a real button — not a div:</p>\n    <button type="button" aria-expanded="false">Click me</button>\n  </main>\n</body>\n</html>',
      qa:[
        { q:{ en:'What is semantic HTML and why should I care?', fa:'HTML معنایی چیست و چرا مهم است؟' },
          a:{ en:'Semantic HTML means choosing the tag that matches the <b>meaning</b> of the content, not just how it looks: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code> instead of a wall of <code>&lt;div&gt;</code>s.<br>Benefits: search engines understand your page better (<b>SEO</b>), screen readers navigate it correctly (<b>accessibility</b>), and other developers read your code like a story (<b>maintainability</b>). Rule: if a semantic tag exists, use it — a <code>&lt;div&gt;</code> is the last resort.<h5>Example</h5><pre class="ans-code"><code>&lt;header&gt;logo + title&lt;/header&gt;   &larr; top of the page\n&lt;nav&gt;links&lt;/nav&gt;               &larr; navigation\n&lt;main&gt;&lt;article&gt;post&lt;/article&gt;&lt;/main&gt; &larr; main content\n&lt;footer&gt;copyright&lt;/footer&gt;     &larr; bottom of the page</code></pre>',
              fa:'HTML معنایی یعنی انتخاب تگی که با <b>معنای</b> محتوا جور باشد، نه فقط ظاهر: <code>&lt;header&gt;</code>، <code>&lt;nav&gt;</code>، <code>&lt;main&gt;</code>، <code>&lt;article&gt;</code>، <code>&lt;section&gt;</code>، <code>&lt;aside&gt;</code>، <code>&lt;footer&gt;</code> به‌جای دیوارِ <code>&lt;div&gt;</code>.<br>مزیت‌ها: موتورهای جستجو صفحه را بهتر می‌فهمند (<b>SEO</b>)، صفحه‌خوان‌ها درست پیمایش می‌کنند (<b>دسترس‌پذیری</b>) و بقیه‌ی توسعه‌دهنده‌ها کد شما را مثل داستان می‌خوانند (<b>نگه‌داری آسان</b>). قانون: اگر تگ معنایی وجود دارد از آن استفاده کنید — <code>&lt;div&gt;</code> آخرین راه‌حل است.<h5>مثال</h5><pre class="ans-code"><code>&lt;header&gt;لوگو + عنوان&lt;/header&gt;   &larr; بالای صفحه\n&lt;nav&gt;لینک‌ها&lt;/nav&gt;               &larr; پیمایش\n&lt;main&gt;&lt;article&gt;پست&lt;/article&gt;&lt;/main&gt; &larr; محتوای اصلی\n&lt;footer&gt;کپی‌رایت&lt;/footer&gt;     &larr; پایین صفحه</code></pre>' } },
        { q:{ en:'What is ARIA and when should I use it?', fa:'ARIA چیست و کی استفاده کنم؟' },
          a:{ en:'ARIA (Accessible Rich Internet Applications) is a set of attributes — roles, labels, states — that make custom widgets understandable to screen readers: <code>role="button"</code>, <code>aria-label</code>, <code>aria-expanded</code>, <code>aria-live</code>.<br>The golden rule: <b>prefer native HTML first</b> — a real <code>&lt;button&gt;</code> beats <code>role="button"</code>. Use ARIA only when a native element does not exist or cannot express the state. Test with a screen reader before adding ARIA — sometimes a proper tag is all you need.<h5>Example</h5><pre class="ans-code"><code>&lt;button aria-expanded="false"&gt;Menu&lt;/button&gt;  &larr; good: real button + state\n&lt;div role="button"&gt;Menu&lt;/div&gt;              &larr; last resort: no native tag</code></pre>',
              fa:'ARIA (Accessible Rich Internet Applications) مجموعه‌ای از ویژگی‌هاست — نقش، برچسب، حالت — که ویجت‌های سفارشی را برای صفحه‌خوان‌ها قابل‌فهم می‌کند: <code>role="button"</code>، <code>aria-label</code>، <code>aria-expanded</code>، <code>aria-live</code>.<br>قانون طلایی: <b>اول HTML بومی</b> — یک <code>&lt;button&gt;</code> واقعی از <code>role="button"</code> بهتر است. فقط وقتی ARIA اضافه کنید که عنصر بومی وجود نداشته باشد یا نتواند حالت را بیان کند. قبل از افزودن ARIA با صفحه‌خوان تست کنید — گاهی فقط یک تگ درست کافی است.<h5>مثال</h5><pre class="ans-code"><code>&lt;button aria-expanded="false"&gt;Menu&lt;/button&gt;  &larr; خوب: دکمه‌ی واقعی + حالت\n&lt;div role="button"&gt;Menu&lt;/div&gt;              &larr; آخرین راه‌حل: بدون تگ بومی</code></pre>' } },
        { q:{ en:'How do I make forms accessible?', fa:'چطور فرم‌ها را دسترس‌پذیر کنم؟' },
          a:{ en:'Five habits that change everything:<ol><li>Every input needs a <code>&lt;label&gt;</code> tied with <code>for</code>/<code>id</code>.</li><li>Group related fields with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>.</li><li>Use the right input types — <code>email</code>, <code>tel</code>, <code>number</code>, <code>date</code> — mobile keyboards adapt automatically.</li><li>Show errors with text, not color alone, and link them with <code>aria-describedby</code>.</li><li>Give the submit button a real value: “Send message”, not “Submit”.</li></ol><h5>Example</h5><pre class="ans-code"><code>&lt;label for="name"&gt;Name&lt;/label&gt;            &larr; label tied to the input\n&lt;input id="name" type="text"&gt;             &larr; same id in the label\n&lt;button type="submit"&gt;Send message&lt;/button&gt; &larr; clear button text</code></pre>',
              fa:'پنج عادت که همه‌چیز را عوض می‌کند:<ol><li>هر input یک <code>&lt;label&gt;</code> داشته باشد که با <code>for</code>/<code>id</code> وصل شده باشد.</li><li>فیلدهای مرتبط با <code>&lt;fieldset&gt;</code> و <code>&lt;legend&gt;</code> گروه‌بندی شوند.</li><li>از نوع درست input استفاده کنید — <code>email</code>، <code>tel</code>، <code>number</code>، <code>date</code> — کیبورد موبایل خودش سازگار می‌شود.</li><li>خطاها با متن نشان داده شوند نه فقط رنگ، و با <code>aria-describedby</code> وصل شوند.</li><li>دکمه‌ی ارسال ارزش واقعی داشته باشد: «ارسال پیام»، نه «Submit».</li></ol><h5>مثال</h5><pre class="ans-code"><code>&lt;label for="name"&gt;Name&lt;/label&gt;            &larr; برچسبِ وصل‌شده به input\n&lt;input id="name" type="text"&gt;             &larr; همان id در label\n&lt;button type="submit"&gt;Send message&lt;/button&gt; &larr; متن واضح دکمه</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'Which tag marks the unique main content?', fa:'کدام تگ محتوای اصلی و یکتا را مشخص می‌کند؟' }, opts:[{ en:'main', fa:'main' },{ en:'aside', fa:'aside' },{ en:'nav', fa:'nav' },{ en:'div', fa:'div' }], a:0 },
        { q:{ en:'When should you use ARIA?', fa:'چه زمانی از ARIA استفاده کنیم؟' }, opts:[{ en:'Always', fa:'همیشه' },{ en:'Only when native HTML cannot express it', fa:'فقط وقتی HTML بومی نتواند بیان کند' },{ en:'Never', fa:'هرگز' },{ en:'Only for images', fa:'فقط برای تصاویر' }], a:1 },
        { q:{ en:'A label connects to its input with…', fa:'label با input خودش با چه چیزی وصل می‌شود؟' }, opts:[{ en:'class and id', fa:'class و id' },{ en:'for and id', fa:'for و id' },{ en:'name and type', fa:'name و type' },{ en:'href and src', fa:'href و src' }], a:1 }
      ],
      ex:[
        { lines:['&lt;[blank]&gt;','  &lt;h1&gt;Post&lt;/h1&gt;','&lt;/main&gt;'], ans:'main' },
        { lines:['&lt;label [blank]="name"&gt;Name&lt;/label&gt;','&lt;input id="name" type="text"&gt;'], ans:'for' }
      ],
      },

    { id:'html-p2', tab:'premium', kind:'course', topic:'html', price:29, likes:98,
      sess:{ en:'Session 2', fa:'جلسه دوم', it:'Lezione 2' },
      title:{ en:'SEO & metadata mastery', fa:'تسلط بر SEO و متادیتا', it:'Padronanza di SEO e metadati' },
      desc:{ en:'Meta tags, Open Graph, structured data and fast images — the complete head-section playbook.', fa:'متا تگ‌ها، Open Graph، داده‌های ساختیافته و تصاویر سریع — کتاب کامل بخش head.', it:'Meta tag avanzati, Open Graph, dati strutturati Schema.org e immagini ultraveloci.' },
      starter:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="A demo page for the SEO session">\n  <title>SEO demo</title>\n  <style>body{font-family:Arial,sans-serif;padding:2rem;background:#f6f7fb;color:#222}</style>\n</head>\n<body>\n  <h1>Inspect the head tag</h1>\n  <p>Right-click and choose View Page Source to see the meta tags.</p>\n</body>\n</html>',
      qa:[
        { q:{ en:'Which meta tags actually matter for SEO?', fa:'کدام متا تگ‌ها واقعاً برای SEO مهم‌اند؟' },
          a:{ en:'The essentials:<ul><li><code>&lt;title&gt;</code> — under ~60 characters, one clear idea;</li><li><b>meta description</b> — 150–160 characters; this is your ad in search results;</li><li><code>&lt;link rel="canonical"&gt;</code> — points to the one true URL;</li><li><b>viewport</b> — mobile rendering;</li><li><code>lang</code> attribute on <code>&lt;html&gt;</code>.</li></ul>For social sharing: <b>Open Graph</b> (<code>og:title</code>, <code>og:description</code>, <code>og:image</code>) and Twitter cards. Then structured data (JSON-LD) tells Google the page is a Course, a Product or an Article — and the snippet gets richer.<h5>Example</h5><pre class="ans-code"><code>&lt;title&gt;Learn HTML — Free Course&lt;/title&gt;      &larr; shown in the tab + results\n&lt;meta name="description" content="…"&gt;        &larr; your ad in search results\n&lt;link rel="canonical" href="…"&gt;             &larr; the one true URL\n&lt;meta property="og:title" content="…"&gt;      &larr; social sharing title</code></pre>',
              fa:'ضروری‌ها:<ul><li><code>&lt;title&gt;</code> — حدود ۶۰ کاراکتر، یک ایده‌ی واضح؛</li><li><b>متا دیسکریپشن</b> — ۱۵۰ تا ۱۶۰ کاراکتر؛ تبلیغ شما در نتایج جستجو؛</li><li><code>&lt;link rel="canonical"&gt;</code> — به آدرس یکتای واقعی اشاره می‌کند؛</li><li><b>viewport</b> — رندر موبایل؛</li><li>ویژگی <code>lang</code> روی <code>&lt;html&gt;</code>.</li></ul>برای شبکه‌های اجتماعی: <b>Open Graph</b> (<code>og:title</code>، <code>og:description</code>، <code>og:image</code>) و Twitter cards. بعد، داده‌های ساختیافته (JSON-LD) به گوگل می‌گویند صفحه دوره است، محصول است یا مقاله — و اسنیپت غنی‌تر می‌شود.<h5>مثال</h5><pre class="ans-code"><code>&lt;title&gt;Learn HTML — Free Course&lt;/title&gt;      &larr; زبانه + نتایج جستجو\n&lt;meta name="description" content="…"&gt;        &larr; تبلیغ شما در نتایج\n&lt;link rel="canonical" href="…"&gt;             &larr; آدرس یکتای واقعی\n&lt;meta property="og:title" content="…"&gt;      &larr; عنوان اشتراک‌گذاری اجتماعی</code></pre>' } },
        { q:{ en:'What is structured data (schema.org)?', fa:'داده‌ی ساختیافته (schema.org) چیست؟' },
          a:{ en:'Structured data is a standard vocabulary (<b>schema.org</b>) that describes your content to machines. You embed it as <b>JSON-LD</b> in the <code>&lt;head&gt;</code>: a snippet starting with <code>"@type": "Course"</code> plus name, description and offers tells Google your page is a course with a price and a provider.<br>Result: <b>rich results</b> — stars, prices, FAQ boxes — that make your link stand out and increase click-through rate. Validate with Google\u2019s Rich Results Test before publishing.<h5>Example — JSON-LD in the head</h5><pre class="ans-code"><code>{ "@context": "https://schema.org",\n  "@type": "Course",\n  "name": "HTML for beginners",        &larr; the page IS a course\n  "offers": { "price": "19" }          &larr; with a price\n}</code></pre>',
              fa:'داده‌ی ساختیافته یک واژگان استاندارد (<b>schema.org</b>) است که محتوای شما را برای ماشین‌ها توصیف می‌کند. آن را به‌صورت <b>JSON-LD</b> داخل <code>&lt;head&gt;</code> قرار می‌دهید: قطعه‌ای که با <code>"@type": "Course"</code> شروع می‌شود و name، description و offers دارد، به گوگل می‌گوید صفحه‌ی شما یک دوره با قیمت و مدرس است.<br>نتیجه: <b>نتایج غنی</b> — ستاره، قیمت، باکس FAQ — که لینک شما را متمایز می‌کند و نرخ کلیک را بالا می‌برد. قبل از انتشار با تست Rich Results گوگل اعتبارسنجی کنید.<h5>مثال — JSON-LD در head</h5><pre class="ans-code"><code>{ "@context": "https://schema.org",\n  "@type": "Course",\n  "name": "HTML for beginners",        &larr; صفحه یک دوره است\n  "offers": { "price": "19" }          &larr; با قیمت\n}</code></pre>' } },
        { q:{ en:'How do I make images load fast?', fa:'چطور تصاویر را سریع بارگذاری کنم؟' },
          a:{ en:'Four practices:<ol><li>Use modern formats — <b>WebP or AVIF</b> instead of PNG/JPG when possible.</li><li>Serve different sizes with <code>srcset</code> + <code>sizes</code> so phones download small files.</li><li>Add <code>loading="lazy"</code> to images below the fold, and always set <code>width</code>/<code>height</code> to prevent layout shift.</li><li>Compress: a 200 KB photo can often become 40 KB with no visible loss.</li></ol>Fast images = fast pages = better SEO and happier visitors.<h5>Example</h5><pre class="ans-code"><code>&lt;img src="photo.webp"            &larr; modern format\n     srcset="photo-400.webp 400w, photo-800.webp 800w"  &larr; right size per screen\n     loading="lazy"              &larr; loads when near viewport\n     width="800" height="500"    &larr; no layout shift\n     alt="Sunset over the sea"&gt;  &larr; accessibility</code></pre>',
              fa:'چهار روش:<ol><li>از فرمت‌های مدرن استفاده کنید — <b>WebP یا AVIF</b> به‌جای PNG/JPG وقتی ممکن است.</li><li>اندازه‌های متفاوت را با <code>srcset</code> + <code>sizes</code> سرو کنید تا گوشی فایل کوچک دانلود کند.</li><li>به تصاویر پایین صفحه <code>loading="lazy"</code> بدهید و همیشه <code>width</code>/<code>height</code> بگذارید تا چیدمان نپرد.</li><li>فشرده کنید: یک عکس ۲۰۰ کیلوبایتی اغلب بدون افت قابل‌مشاهده ۴۰ کیلوبایت می‌شود.</li></ol>تصاویر سریع = صفحه‌های سریع = SEO بهتر و بازدیدکننده‌ی راضی‌تر.<h5>مثال</h5><pre class="ans-code"><code>&lt;img src="photo.webp"            &larr; فرمت مدرن\n     srcset="photo-400.webp 400w, photo-800.webp 800w"  &larr; اندازه‌ی مناسب هر صفحه\n     loading="lazy"              &larr; بارگذاری نزدیک دید\n     width="800" height="500"    &larr; بدون جابه‌جایی چیدمان\n     alt="Sunset over the sea"&gt;  &larr; دسترس‌پذیری</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'Where does the meta description appear?', fa:'متا دیسکریپشن کجا دیده می‌شود؟' }, opts:[{ en:'In the browser tab', fa:'در زبانه‌ی مرورگر' },{ en:'In search results', fa:'در نتایج جستجو' },{ en:'On the image', fa:'روی تصویر' },{ en:'In the URL', fa:'در آدرس' }], a:1 },
        { q:{ en:'og:title is used for…', fa:'og:title برای چیست؟' }, opts:[{ en:'Search engines', fa:'موتورهای جستجو' },{ en:'Social media sharing', fa:'اشتراک‌گذاری در شبکه‌های اجتماعی' },{ en:'Databases', fa:'پایگاه‌داده' },{ en:'Printing', fa:'چاپ' }], a:1 },
        { q:{ en:'WebP is…', fa:'WebP چیست؟' }, opts:[{ en:'A programming language', fa:'یک زبان برنامه‌نویسی' },{ en:'A modern image format', fa:'یک فرمت تصویر مدرن' },{ en:'A CSS property', fa:'یک ویژگی CSS' },{ en:'A font', fa:'یک فونت' }], a:1 }
      ],
      ex:[
        { lines:['&lt;meta name="[blank]" content="A short summary"&gt;'], ans:'description' },
        { lines:['&lt;img src="photo.webp" loading="[blank]" alt="Photo"&gt;'], ans:'lazy' }
      ],
      },

    /* ================= PREMIUM — CSS ================= */
    { id:'css-p1', tab:'premium', kind:'course', topic:'css', price:39, likes:156,
      sess:{ en:'Session 1', fa:'جلسه اول', it:'Lezione 1' },
      title:{ en:'Responsive design pro', fa:'طراحی ریسپانسیو حرفه‌ای', it:'Design responsive professionale' },
      desc:{ en:'Fluid grids, media queries and clamp() — one layout that fits every screen, with code review.', fa:'گرید سیال، مدیا کوئری و clamp() — یک چیدمان برای همه‌ی صفحه‌ها، همراه با بازبینی کد.', it:'Griglie fluide, media query moderne e clamp() — un layout perfetto su ogni schermo.' },
      starter:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Responsive demo</title>\n  <style>\n    body{margin:0;font-family:Arial,sans-serif}\n    .card{background:#4F7DF3;color:#fff;padding:2rem;text-align:center;font-size:1.2rem}\n    @media (min-width:700px){.card{background:#7C3AED;font-size:1.6rem}}\n  </style>\n</head>\n<body>\n  <div class="card">Resize the window — I change at 700px!</div>\n</body>\n</html>',
      qa:[
        { q:{ en:'What does responsive design mean?', fa:'طراحی ریسپانسیو یعنی چه؟' },
          a:{ en:'A responsive site <b>adapts to the screen</b>: phone, tablet, laptop, TV — same content, different layout. Three pillars:<ol><li><b>Fluid grids</b> — flexible units (<code>%</code>, <code>fr</code>, <code>vw</code>) instead of fixed pixels;</li><li><b>Flexible images</b> — <code>max-width: 100%</code>;</li><li><b>Media queries</b> — breakpoints where the layout changes.</li></ol>Bonus in 2026: <b>container queries</b>, <code>clamp()</code> and viewport units replace much of the old media-query code.<h5>Example</h5><pre class="ans-code"><code>.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }  &larr; fluid grid\nimg { max-width: 100%; }                          &larr; flexible images</code></pre>',
              fa:'سایت ریسپانسیو <b>با صفحه سازگار می‌شود</b>: گوشی، تبلت، لپ‌تاپ، تلویزیون — همان محتوا، چیدمان متفاوت. سه ستون:<ol><li><b>گرید سیال</b> — واحدهای منعطف (<code>%</code>، <code>fr</code>، <code>vw</code>) به‌جای پیکسل ثابت؛</li><li><b>تصاویر منعطف</b> — <code>max-width: 100%</code>؛</li><li><b>مدیا کوئری</b> — نقاط شکستی که چیدمان عوض می‌شود.</li></ol>در ۲۰۲۶ بونوس هم داریم: <b>container queries</b>، <code>clamp()</code> و واحدهای viewport جای خیلی از کدهای قدیمی مدیا کوئری را می‌گیرند.<h5>مثال</h5><pre class="ans-code"><code>.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }  &larr; گرید سیال\nimg { max-width: 100%; }                          &larr; تصاویر منعطف</code></pre>' } },
        { q:{ en:'How do media queries work?', fa:'مدیا کوئری چطور کار می‌کند؟' },
          a:{ en:'A media query applies CSS <b>only when a condition is true</b>:<ul><li><code>@media (max-width: 768px) { ... }</code> — “phone rules” below 768px;</li><li><code>@media (min-width: 769px) { ... }</code> — “desktop rules” above it.</li></ul>Best practice: <b>mobile-first</b> — write the base styles for the phone, then use <code>min-width</code> queries to enhance for larger screens. Fewer overrides, cleaner code. Choose breakpoints by your <b>content</b>, not by device names.<h5>Example</h5><pre class="ans-code"><code>@media (max-width: 768px) {   &larr; only when the screen is smaller than 768px\n  .nav { flex-direction: column; }\n}</code></pre>',
              fa:'مدیا کوئری فقط وقتی <b>شرط درست باشد</b> CSS را اعمال می‌کند:<ul><li><code>@media (max-width: 768px) { ... }</code> — «قوانین گوشی» زیر ۷۶۸ پیکسل؛</li><li><code>@media (min-width: 769px) { ... }</code> — «قوانین دسکتاپ» بالای آن.</li></ul>بهترین روش: <b>موبایل-اول</b> — استایل پایه را برای گوشی بنویسید و بعد با <code>min-width</code> برای صفحه‌های بزرگ‌تر تقویت کنید. بازنویسی کمتر، کد تمیزتر. نقاط شکست را بر اساس <b>محتوای</b> خودتان انتخاب کنید نه اسم دستگاه‌ها.<h5>مثال</h5><pre class="ans-code"><code>@media (max-width: 768px) {   &larr; فقط وقتی صفحه کوچک‌تر از ۷۶۸px است\n  .nav { flex-direction: column; }\n}</code></pre>' } },
        { q:{ en:'What is clamp() and why is it a superpower?', fa:'clamp() چیست و چرا ابرقدرت است؟' },
          a:{ en:'<code>clamp(MIN, VAL, MAX)</code> lets one value <b>scale fluidly</b> between a minimum and a maximum. Example: <code>font-size: clamp(1rem, 2.5vw, 1.5rem)</code> — the font grows with the viewport but never gets too small or too big.<br>Use it for font sizes, spacing, widths and gaps. It removes dozens of media queries, keeps type readable on every screen, and it respects accessibility because the browser still honors user zoom.<h5>Example</h5><pre class="ans-code"><code>h1 { font-size: clamp(1.5rem, 4vw, 3rem); }   &larr; grows with the viewport,\n                                               never too small or too big</code></pre>',
              fa:'<code>clamp(MIN, VAL, MAX)</code> به یک مقدار اجازه می‌دهد <b>به‌صورت سیال</b> بین حداقل و حداکثر تغییر کند. مثال: <code>font-size: clamp(1rem, 2.5vw, 1.5rem)</code> — فونت با اندازه‌ی صفحه بزرگ می‌شود اما هیچ‌وقت خیلی کوچک یا خیلی بزرگ نمی‌شود.<br>برای اندازه‌ی فونت، فاصله‌ها، عرض‌ها و gapها استفاده کنید. ده‌ها مدیا کوئری را حذف می‌کند، تایپوگرافی را در هر صفحه‌ای خوانا نگه می‌دارد و چون مرورگر زوم کاربر را رعایت می‌کند، دسترس‌پذیری هم حفظ می‌شود.<h5>مثال</h5><pre class="ans-code"><code>h1 { font-size: clamp(1.5rem, 4vw, 3rem); }   &larr; با صفحه بزرگ می‌شود،\n                                               هیچ‌وقت خیلی کوچک یا بزرگ</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'A responsive site…', fa:'سایت ریسپانسیو…' }, opts:[{ en:'Adapts to every screen', fa:'با هر صفحه‌ای سازگار می‌شود' },{ en:'Only works on desktop', fa:'فقط روی دسکتاپ کار می‌کند' },{ en:'Needs a plugin', fa:'نیاز به پلاگین دارد' },{ en:'Is always fixed width', fa:'همیشه عرض ثابت است' }], a:0 },
        { q:{ en:'Media queries check…', fa:'مدیا کوئری چه چیزی را بررسی می‌کند؟' }, opts:[{ en:'A condition like max-width', fa:'یک شرط مثل max-width' },{ en:'The file size', fa:'حجم فایل' },{ en:'The page title', fa:'عنوان صفحه' },{ en:'The server speed', fa:'سرعت سرور' }], a:0 },
        { q:{ en:'clamp(1rem, 4vw, 3rem) means…', fa:'clamp(1rem, 4vw, 3rem) یعنی…' }, opts:[{ en:'A fixed size', fa:'اندازه‌ی ثابت' },{ en:'A fluid size between 1rem and 3rem', fa:'اندازه‌ی سیال بین 1rem و 3rem' },{ en:'A negative size', fa:'اندازه‌ی منفی' },{ en:'A color', fa:'یک رنگ' }], a:1 }
      ],
      ex:[
        { lines:['@media ([blank]-width: 768px) { .nav { flex-direction: column; } }'], ans:'max' },
        { lines:['img { [blank]-width: 100%; }'], ans:'max' }
      ],
      },

    { id:'css-p2', tab:'premium', kind:'course', topic:'css', price:49, likes:143,
      sess:{ en:'Session 2', fa:'جلسه دوم', it:'Lezione 2' },
      title:{ en:'Flexbox & Grid mastery', fa:'تسلط بر فلکس‌باکس و گرید', it:'Padronanza di Flexbox e Grid' },
      desc:{ en:'One-dimensional and two-dimensional layout — every modern layout pattern, with code review.', fa:'چیدمان تک‌بعدی و دوبعدی — همه‌ی الگوهای مدرن چیدمان، همراه با بازبینی کد.', it:'Layout monodimensionali e bidimensionali — tutti i moderni pattern di layout CSS.' },
      starter:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Flexbox demo</title>\n  <style>\n    .row{display:flex;gap:12px;flex-wrap:wrap}\n    .box{flex:1 1 120px;padding:1.4rem;border-radius:10px;color:#fff;text-align:center;font-weight:700}\n    .b1{background:#4F7DF3}.b2{background:#7C3AED}.b3{background:#A855F7}\n  </style>\n</head>\n<body>\n  <div class="row">\n    <div class="box b1">One</div>\n    <div class="box b2">Two</div>\n    <div class="box b3">Three</div>\n  </div>\n</body>\n</html>',
      qa:[
        { q:{ en:'Flexbox or Grid — which one do I use?', fa:'فلکس‌باکس یا گرید — کدام را استفاده کنم؟' },
          a:{ en:'<b>Flexbox is one-dimensional</b>: it arranges items along ONE axis (row or column) — perfect for toolbars, navbars, centering and “items in a line”.<br><b>Grid is two-dimensional</b>: rows AND columns at the same time — perfect for whole-page layouts, card grids and dashboards.<br>Golden rule: <b>layout the page with Grid, align the pieces inside with Flexbox</b>. When you master both, every layout problem becomes a five-minute task.<h5>Example</h5><pre class="ans-code"><code>.nav  { display: flex; gap: 1rem; }                          &larr; one line of items\n.page { display: grid; grid-template-columns: 1fr 2fr; }     &larr; rows AND columns</code></pre>',
              fa:'<b>فلکس‌باکس تک‌بعدی است</b>: آیتم‌ها را روی یک محور مرتب می‌کند (ردیف یا ستون) — عالی برای نوار ابزار، منو، وسط‌چین‌کردن و «چند آیتم در یک خط».<br><b>گرید دوبعدی است</b>: سطر و ستون هم‌زمان — عالی برای چیدمان کل صفحه، گرید کارت‌ها و داشبوردها.<br>قانون طلایی: <b>صفحه را با Grid بچینید و قطعات داخلش را با Flexbox تراز کنید</b>. وقتی هر دو را مسلط شوید، هر مشکل چیدمانی یک کار پنج‌دقیقه‌ای است.<h5>مثال</h5><pre class="ans-code"><code>.nav  { display: flex; gap: 1rem; }                          &larr; یک خط آیتم\n.page { display: grid; grid-template-columns: 1fr 2fr; }     &larr; سطر و ستون با هم</code></pre>' } },
        { q:{ en:'What are the essential flexbox properties?', fa:'ویژگی‌های ضروری فلکس‌باکس کدام‌اند؟' },
          a:{ en:'On the <b>container</b>:<ul><li><code>display: flex;</code></li><li><code>flex-direction</code> — row or column;</li><li><code>justify-content</code> — main axis (center, space-between);</li><li><code>align-items</code> — cross axis (center, stretch);</li><li><code>gap</code> — spacing; use it instead of margins.</li></ul>On the <b>items</b>: <code>flex-grow</code> / <code>flex-shrink</code> / <code>flex-basis</code> — the shorthand <code>flex: 1</code> means “grow equally”; <code>align-self</code> overrides alignment for one item.<br>Memory aid: <b>justify-content = main axis, align-items = cross axis</b>.<h5>Example</h5><pre class="ans-code"><code>.row { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }\n.item { flex: 1; }              &larr; grow equally</code></pre>',
              fa:'روی <b>ظرف</b>:<ul><li><code>display: flex;</code></li><li><code>flex-direction</code> — row یا column؛</li><li><code>justify-content</code> — محور اصلی (center، space-between)؛</li><li><code>align-items</code> — محور عرضی (center، stretch)؛</li><li><code>gap</code> — فاصله‌گذاری؛ به‌جای مارجین.</li></ul>روی <b>آیتم‌ها</b>: <code>flex-grow</code> / <code>flex-shrink</code> / <code>flex-basis</code> — خلاصه‌ی <code>flex: 1</code> یعنی «به‌طور مساوی بزرگ شو»؛ <code>align-self</code> تراز یک آیتم را override می‌کند.<br>یادگاری: <b>justify-content = محور اصلی، align-items = محور عرضی</b>.<h5>مثال</h5><pre class="ans-code"><code>.row { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }\n.item { flex: 1; }              &larr; به‌طور مساوی بزرگ شو</code></pre>' } },
        { q:{ en:'What grid patterns should every developer know?', fa:'هر توسعه‌دهنده‌ای باید کدام الگوهای گرید را بداند؟' },
          a:{ en:'Three patterns cover most real pages:<ol><li><b>Holy grail layout</b> — header, footer, and three columns (nav / main / aside) with <code>grid-template-areas</code>;</li><li><b>Auto-fit card grid</b> — <code>grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))</code> creates responsive cards with zero media queries;</li><li><b>Overlapping hero</b> — <code>grid-template-columns: 1fr 1fr</code> with <code>z-index</code> layers for modern magazine-style compositions.</li></ol>Master these three and you can build almost any layout you see on the web.<h5>Example</h5><pre class="ans-code"><code>.cards { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }  &larr; auto-fit card grid\n.page  { grid-template-areas: "nav main aside"; }                     &larr; holy grail layout</code></pre>',
              fa:'سه الگو بیشتر صفحه‌های واقعی را پوشش می‌دهند:<ol><li><b>چیدمان هولی‌گریل</b> — هدر، فوتر و سه ستون (منو / محتوا / کنار) با <code>grid-template-areas</code>؛</li><li><b>گرید کارت خودکار</b> — <code>grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))</code> با صفر مدیا کوئری کارت‌های ریسپانسیو می‌سازد؛</li><li><b>هیروی هم‌پوشان</b> — <code>grid-template-columns: 1fr 1fr</code> با لایه‌های <code>z-index</code> برای ترکیب‌بندی‌های مدرن مجله‌ای.</li></ol>این سه تا را مسلط شوید و تقریباً هر چیدمانی که در وب می‌بینید را می‌توانید بسازید.<h5>مثال</h5><pre class="ans-code"><code>.cards { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }  &larr; گرید کارت خودکار\n.page  { grid-template-areas: "nav main aside"; }                     &larr; چیدمان هولی‌گریل</code></pre>' } }
      ],
      quiz:[
        { q:{ en:'Flexbox lays out items along…', fa:'فلکس‌باکس آیتم‌ها را روی…' }, opts:[{ en:'One axis', fa:'یک محور' },{ en:'Two axes', fa:'دو محور' },{ en:'Three axes', fa:'سه محور' },{ en:'No axis', fa:'هیچ محوری' }], a:0 },
        { q:{ en:'Grid is best for…', fa:'گرید برای چه چیزی بهترین است؟' }, opts:[{ en:'Toolbars', fa:'نوار ابزار' },{ en:'Whole-page layouts', fa:'چیدمان کل صفحه' },{ en:'Single buttons', fa:'دکمه‌های تکی' },{ en:'Text colors', fa:'رنگ متن' }], a:1 },
        { q:{ en:'justify-content controls…', fa:'justify-content چه چیزی را کنترل می‌کند؟' }, opts:[{ en:'The cross axis', fa:'محور عرضی' },{ en:'The main axis', fa:'محور اصلی' },{ en:'The border', fa:'حاشیه' },{ en:'The padding', fa:'پدینگ' }], a:1 }
      ],
      ex:[
        { lines:['.row { display: [blank]; gap: 1rem; }'], ans:'flex' },
        { lines:['.cards { grid-template-columns: repeat(auto-fit, minmax(220px, [blank])); }'], ans:'1fr' }
      ],
      },

    /* ================= COMPONENTS (free & premium) ================= */
    { id:'comp-btn', tab:'components', kind:'component', topic:'comp', price:null, likes:487,
      title:{ en:'Glass Button', fa:'دکمه‌ی شیشه‌ای', it:'Pulsante Vetro' },
      desc:{ en:'A glossy frosted-glass button with hover lift — copy-paste into any project.', fa:'دکمه‌ی شیشه‌ای مات با بالا-آمدن در hover — کپی کنید و در هر پروژه‌ای استفاده کنید.', it:'Un pulsante moderno in vetro satinato con effetto hover, pronto da usare.' },
      features:[
        { en:'CSS only — zero JavaScript', fa:'فقط CSS — بدون جاوااسکریپت' },
        { en:'Works on dark & light backgrounds', fa:'روی پس‌زمینه‌ی تیره و روشن کار می‌کند' },
        { en:'Smooth hover & press feedback', fa:'بازخورد نرم در hover و کلیک' }
      ],
      code:'&lt;!-- Glass button --&gt;\n&lt;button class="glass-btn"&gt;Start free course&lt;/button&gt;\n\n&lt;style&gt;\n.glass-btn{\n  padding:.9em 1.7em;border-radius:999px;\n  border:1px solid rgba(255,255,255,.35);\n  background:rgba(255,255,255,.12);\n  backdrop-filter:blur(12px);\n  color:#fff;font-weight:700;font-size:1rem;cursor:pointer;\n  transition:transform .25s,box-shadow .25s,background .25s;\n}\n.glass-btn:hover{\n  transform:translateY(-3px);\n  box-shadow:0 14px 30px rgba(0,0,0,.35);\n  background:rgba(255,255,255,.18);\n}\n.glass-btn:active{transform:translateY(1px)}\n&lt;/style&gt;' },

    { id:'comp-nav', tab:'components', kind:'component', topic:'comp', price:null, likes:523,
      title:{ en:'Responsive Navbar', fa:'نوار ناوبری ریسپانسیو', it:'Navbar Responsive' },
      desc:{ en:'A sticky glass navbar with brand, links and a hamburger that collapses on mobile.', fa:'نوار ناوبری چسبان شیشه‌ای با لوگو، لینک‌ها و همبرگری برای موبایل.', it:'Una barra di navigazione fissa con effetto blur, menu a discesa e hamburger per mobile.' },
      features:[
        { en:'Sticky + glassmorphism', fa:'چسبان + شیشه‌ای' },
        { en:'Hamburger collapse under 768px', fa:'جمع‌شدن همبرگری زیر ۷۶۸ پیکسل' },
        { en:'Uses your existing CSS variables', fa:'از متغیرهای CSS خودتان استفاده می‌کند' }
      ],
      code:'&lt;header class="nav glass"&gt;\n  &lt;a class="nav__brand" href="#"&gt;MySite&lt;/a&gt;\n  &lt;nav class="nav__links"&gt;\n    &lt;a href="#"&gt;Home&lt;/a&gt;\n    &lt;a href="#"&gt;Courses&lt;/a&gt;\n    &lt;a href="#"&gt;About&lt;/a&gt;\n    &lt;a href="#"&gt;Contact&lt;/a&gt;\n  &lt;/nav&gt;\n  &lt;button class="nav__burger"&gt;&#9776;&lt;/button&gt;\n&lt;/header&gt;\n\n&lt;style&gt;\n.nav{\n  position:sticky;top:0;display:flex;align-items:center;\n  justify-content:space-between;padding:1rem 2rem;\n  background:rgba(255,255,255,.08);\n  backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.12);\n}\n.nav__brand{font-weight:800;font-size:1.2rem}\n.nav__links{display:flex;gap:1.5rem}\n.nav__burger{display:none}\n@media (max-width:768px){\n  .nav__links{display:none}\n  .nav__burger{display:block}\n}\n&lt;/style&gt;' },

    { id:'comp-hero', tab:'components', kind:'component', topic:'comp', price:null, likes:461,
      title:{ en:'Hero Section', fa:'بخش هیرو', it:'Sezione Hero' },
      desc:{ en:'A full-screen hero with animated gradient glow, headline and two call-to-action buttons.', fa:'هیروی تمام‌صفحه با درخشش گرادیانی متحرک، تیتر و دو دکمه اقدام به عمل.', it:'Una sezione hero a schermo intero con bagliore gradiente animato e pulsanti call-to-action.' },
      features:[
        { en:'Full-viewport layout', fa:'چیدمان تمام‌صفحه' },
        { en:'Animated background glow', fa:'درخشش پس‌زمینه‌ی متحرک' },
        { en:'Mobile-first responsive', fa:'موبایل-اول و ریسپانسیو' }
      ],
      code:'&lt;section class="hero"&gt;\n  &lt;h1&gt;Learn to code.&lt;br&gt;Build your future.&lt;/h1&gt;\n  &lt;p&gt;Free courses, premium skills, real projects.&lt;/p&gt;\n  &lt;div class="hero__cta"&gt;\n    &lt;a class="btn btn--gold" href="#"&gt;Start free&lt;/a&gt;\n    &lt;a class="btn btn--ghost" href="#"&gt;Hire me&lt;/a&gt;\n  &lt;/div&gt;\n&lt;/section&gt;\n\n&lt;style&gt;\n.hero{\n  min-height:100svh;display:grid;place-content:center;\n  text-align:center;padding:2rem;\n  background:\n    radial-gradient(40% 50% at 30% 30%,rgba(124,58,237,.35),transparent 70%),\n    radial-gradient(40% 50% at 70% 70%,rgba(79,125,243,.3),transparent 70%),\n    #0B0F16;\n  color:#fff;\n}\n.hero h1{font-size:clamp(2rem,6vw,4rem);line-height:1.1}\n.hero__cta{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem}\n.btn{padding:.8em 1.6em;border-radius:999px;text-decoration:none;font-weight:700}\n.btn--gold{background:linear-gradient(115deg,#B8860B,#F6E7A1,#D4AF37);color:#0B0813}\n.btn--ghost{border:1.5px solid #fff;color:#fff}\n@media (max-width:480px){.hero__cta{flex-direction:column}}\n&lt;/style&gt;' },

    { id:'comp-price', tab:'components', kind:'component', topic:'comp', price:9, likes:214,
      title:{ en:'Pricing Table', fa:'جدول قیمت‌گذاری', it:'Tabella Prezzi' },
      desc:{ en:'Three-tier pricing cards with a highlighted “popular” plan — ready for your course store.', fa:'سه کارت قیمت‌گذاری با پلن «محبوب» هایلایت‌شده — آماده برای فروشگاه دوره شما.', it:'Tre schede di prezzo con piano in evidenza, pronte per la vendita di corsi o servizi.' },
      features:[
        { en:'3 tiers + popular highlight', fa:'۳ سطح + هایلایت پلن محبوب' },
        { en:'Pure HTML/CSS', fa:'فقط HTML/CSS' },
        { en:'Responsive card grid', fa:'گرید کارت ریسپانسیو' }
      ],
      code:'&lt;div class="pricing"&gt;\n  &lt;div class="plan"&gt;\n    &lt;h3&gt;Free&lt;/h3&gt;&lt;p class="plan__price"&gt;$0&lt;/p&gt;\n    &lt;ul&gt;&lt;li&gt;HTML &amp; CSS basics&lt;/li&gt;&lt;li&gt;Community support&lt;/li&gt;&lt;/ul&gt;\n    &lt;a class="plan__btn" href="#"&gt;Start&lt;/a&gt;\n  &lt;/div&gt;\n  &lt;div class="plan plan--hot"&gt;\n    &lt;h3&gt;Pro&lt;/h3&gt;&lt;p class="plan__price"&gt;$39&lt;/p&gt;\n    &lt;ul&gt;&lt;li&gt;Everything in Free&lt;/li&gt;&lt;li&gt;Code review&lt;/li&gt;&lt;li&gt;Project files&lt;/li&gt;&lt;/ul&gt;\n    &lt;a class="plan__btn" href="#"&gt;Go Pro&lt;/a&gt;\n  &lt;/div&gt;\n  &lt;div class="plan"&gt;\n    &lt;h3&gt;Bundle&lt;/h3&gt;&lt;p class="plan__price"&gt;$79&lt;/p&gt;\n    &lt;ul&gt;&lt;li&gt;Everything in Pro&lt;/li&gt;&lt;li&gt;1:1 mentoring&lt;/li&gt;&lt;/ul&gt;\n    &lt;a class="plan__btn" href="#"&gt;Get bundle&lt;/a&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;style&gt;\n.pricing{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}\n.plan{padding:1.5rem;border:1px solid rgba(255,255,255,.15);border-radius:16px;text-align:center}\n.plan--hot{border-color:#D4AF37;box-shadow:0 12px 30px rgba(212,175,55,.25)}\n.plan__price{font-size:2rem;font-weight:800}\n.plan__btn{display:inline-block;margin-top:1rem;padding:.6em 1.4em;border-radius:999px;background:#D4AF37;color:#0B0813;font-weight:700;text-decoration:none}\n&lt;/style&gt;' },

    { id:'comp-testi', tab:'components', kind:'component', topic:'comp', price:12, likes:189,
      title:{ en:'Testimonial Carousel', fa:'اسلایدر نظر مشتریان', it:'Carosello Testimonianze' },
      desc:{ en:'A swipeable, auto-playing testimonial carousel built with modern CSS scroll-snap.', fa:'اسلایدر نظر مشتریان با کشیدن و پخش خودکار با CSS scroll-snap.', it:'Un carosello testimonianze fluido e interattivo realizzato con CSS scroll-snap.' },
      features:[
        { en:'Swipe on touch, arrows on desktop', fa:'کشیدن با انگشت، فلش در دسکتاپ' },
        { en:'Auto-play with pause on hover', fa:'پخش خودکار با توقف در hover' },
        { en:'No JavaScript required', fa:'بدون نیاز به جاوااسکریپت' }
      ],
      code:'&lt;div class="quotes"&gt;\n  &lt;figure class="quote"&gt;\n    &lt;blockquote&gt;“The clearest HTML course I have taken.”&lt;/blockquote&gt;\n    &lt;figcaption&gt;— Sara, freelancer&lt;/figcaption&gt;\n  &lt;/figure&gt;\n  &lt;figure class="quote"&gt;\n    &lt;blockquote&gt;“Short lessons, real projects, zero fluff.”&lt;/blockquote&gt;\n    &lt;figcaption&gt;— Marco, student&lt;/figcaption&gt;\n  &lt;/figure&gt;\n  &lt;figure class="quote"&gt;\n    &lt;blockquote&gt;“I shipped my first site in two weeks.”&lt;/blockquote&gt;\n    &lt;figcaption&gt;— Ali, entrepreneur&lt;/figcaption&gt;\n  &lt;/figure&gt;\n&lt;/div&gt;\n\n&lt;style&gt;\n.quotes{\n  display:flex;gap:1rem;overflow-x:auto;\n  scroll-snap-type:x mandatory;padding:1rem;\n}\n.quote{\n  flex:0 0 min(320px,85%);scroll-snap-align:center;\n  padding:1.5rem;border:1px solid rgba(255,255,255,.15);\n  border-radius:16px;background:rgba(255,255,255,.05);\n}\n.quote blockquote{margin:0 0 .6rem;font-size:1.05rem;font-style:italic}\n.quote figcaption{opacity:.7;font-size:.9rem}\n&lt;/style&gt;' },

    { id:'comp-port', tab:'components', kind:'component', topic:'comp', price:15, likes:232,
      title:{ en:'Portfolio Grid', fa:'گرید نمونه‌کار', it:'Griglia Portfolio' },
      desc:{ en:'A responsive project grid with hover overlay, zoom and a filter bar — for your portfolio page.', fa:'گرید ریسپانسیو پروژه‌ها با اورلی hover، بزرگ‌نمایی و نوار فیلتر.', it:'Una griglia progetti responsive con overlay hover, zoom ed effetti moderni per portfolio.' },
      features:[
        { en:'Auto-fit responsive grid', fa:'گرید خودکار ریسپانسیو' },
        { en:'Hover overlay + zoom', fa:'اورلی hover + زوم' },
        { en:'Category filter bar included', fa:'شامل نوار فیلتر دسته‌بندی' }
      ],
      code:'&lt;div class="work"&gt;\n  &lt;figure class="work__item"&gt;\n    &lt;img src="project-1.jpg" alt="Project 1"&gt;\n    &lt;figcaption&gt;&lt;h3&gt;Restaurant site&lt;/h3&gt;&lt;p&gt;HTML &amp; CSS&lt;/p&gt;&lt;/figcaption&gt;\n  &lt;/figure&gt;\n  &lt;figure class="work__item"&gt;\n    &lt;img src="project-2.jpg" alt="Project 2"&gt;\n    &lt;figcaption&gt;&lt;h3&gt;Portfolio&lt;/h3&gt;&lt;p&gt;Responsive&lt;/p&gt;&lt;/figcaption&gt;\n  &lt;/figure&gt;\n  &lt;figure class="work__item"&gt;\n    &lt;img src="project-3.jpg" alt="Project 3"&gt;\n    &lt;figcaption&gt;&lt;h3&gt;Landing page&lt;/h3&gt;&lt;p&gt;Modern layout&lt;/p&gt;&lt;/figcaption&gt;\n  &lt;/figure&gt;\n&lt;/div&gt;\n\n&lt;style&gt;\n.work{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}\n.work__item{position:relative;margin:0;border-radius:14px;overflow:hidden}\n.work__item img{width:100%;height:220px;object-fit:cover;transition:transform .5s}\n.work__item:hover img{transform:scale(1.06)}\n.work__item figcaption{\n  position:absolute;inset:auto 0 0 0;padding:1rem;\n  background:linear-gradient(transparent,rgba(0,0,0,.8));color:#fff;\n  transform:translateY(100%);transition:transform .4s;\n}\n.work__item:hover figcaption{transform:none}\n&lt;/style&gt;' }
  ],

  /* ---------- i18n : every UI string in EN / FA / IT ---------- */
 i18n: {
  en: {
    // ===== ناوبری =====
    skip: 'Skip to content',
    menu: 'Menu',
    theme_toggle: 'Toggle dark and light mode',
    language_change: 'Change language',
    course_filters: 'Course filters',
    course_catalog: 'Course catalog',
    free_session_menu: 'Free course sessions',
    premium_session_menu: 'Premium course sessions',
    back_to_top: 'Back to top',
    cart_open: 'Shopping cart',
    cart_close: 'Close cart',
    share_close: 'Close share dialog',
    code_sample: 'Scrollable code sample',
    cart_remove: 'Remove item',
    nav_home: 'Home',
    nav_about: 'About me',
    nav_samples: 'Samples',
    nav_courses: 'Courses',
    nav_contact: 'Contact',
    free_courses: 'Free courses',
    premium_courses: 'Premium courses',
    components: 'Components',

    // ===== هیرو (بخش اصلی) =====
    hero_badge: 'Freelance Web Developer · Coding Educator',
    hero_code: 'code with',
    hero_name: 'Bahareh',
    hero_sub: 'Free & Premium HTML/CSS Courses',
    hero_slogan: 'Practical lessons .Real projects .Clean code',
    cta_free: 'Start Free Course →',
    cta_premium: 'View Premium Courses →',
    cta_hire: 'Hire Me →',
    scroll: 'Scroll',

    // ===== درباره من =====
    about_eyebrow: 'About',
    about_title: 'Why learn with me — and why <em>hire</em> me',
    about_p1: 'I\'m <strong>Bahareh</strong> — a freelance web developer and coding educator. What i do:',
    about_p2: 'My method is simple: <strong>show the smallest working thing first</strong>, then grow it. Short lessons, real projects, code you can actually ship.',
    about_v1: 'build fast, accessible websites for founders and small businesses',
    about_v2: 'Free courses that are genuinely useful',
    about_v3: 'Premium courses with personal code review',
    about_v4: 'Ready-made templates and components',

    // ===== یوتیوب =====
    yt_eyebrow: 'YouTube',
    yt_title: 'Learn on <em>YouTube</em>',
    yt_sub: 'Free tutorials, tips, and project walkthroughs',
    yt_cta: 'Subscribe on YouTube',
    st_subs: 'Subscribers',
    st_videos: 'Videos',
    st_views: 'Total views',
    st_free: 'Free',

    // ===== سوالات متداول =====
    faq_eyebrow: 'FAQ',
    faq_title: 'Questions, <em>answered</em>',

    // ===== تماس =====
    contact_eyebrow: 'Contact',
    contact_title: 'Let\u2019s <em>build</em> something',
    contact_lead: 'Tell me about your project or ask about a course. I reply within 24 hours.',
    contact_direct: 'Direct contact',
    email: 'Email',

    // ===== فرم تماس =====
    f_name: 'Name',
    f_email: 'Email',
    f_subject: 'Subject',
    f_budget: 'Budget (optional)',
    f_message: 'Message',
    f_send: 'Send message',
  
    f_s1: 'Question about a free course',
    f_s2: 'Buy a premium course',
    f_s3: 'Buy a template or component',
    f_s4: 'Freelance project enquiry',
    f_s5: 'Something else',

    // ===== گزینه‌های بودجه =====
    f_b0: 'Not applicable',
    f_b1: '< $500',
    f_b2: '$500 – $1,500',
    f_b3: '$1,500 – $4,000',
    f_b4: '$4,000+',

    // ===== placeholderهای فرم =====
    f_name_placeholder: 'John Smith',
    f_msg_placeholder: 'How can I help?',

    // ===== خطاهای فرم =====
    err_name: 'Please enter your name.',
    err_email: 'Please enter a valid email address.',
    err_msg: 'Please write a short message.',
    sending: 'Sending…',
    sent: 'Thank you! Your message is on its way — I reply within 24 hours.',
    sentMail: 'Your email app is opening with the message ready to send.',
    send_fail: 'The message could not be sent. Please try again shortly.',

    // ===== فوتر =====
    foot_about: 'Empowering the next generation of web developers with clear, practical, and modern HTML &amp; CSS education.',
    foot_quick: 'Quick Links',
    foot_courses: 'Courses',
    foot_c1: 'HTML Basics (Free)',
    foot_c2: 'CSS First Steps (Free)',
    foot_c3: 'Responsive Design Pro',
    foot_c4: 'CSS Animations',
    foot_c5: 'Complete Bundle',
    foot_made: 'Built with',
    foot_clean: 'and clean code',
    to_top: 'Top',
    rights: 'All rights reserved.',

    // ===== بخش دوره‌ها (tab UI) =====
    courses_eyebrow: 'Courses',
    courses_title: 'Browse <em>courses</em> &amp; components',
    courses_lead: 'Free sessions, premium deep-dives and ready-made components — like, download, share and buy in one place.',
    courses_loading: 'Course content loads as you approach this section…',
    course_videos_eyebrow: 'YouTube lessons',
    course_videos_title: 'Start with the <em>video lessons</em>',
    course_videos_lead: 'Four free sessions in learning order — open any lesson on YouTube.',
    tab_free: 'Free courses',
    tab_premium: 'Premium courses',
    tab_components: 'Components',
    coming_soon: 'Coming soon',
    code_output: 'Output',
    code_tab: 'Preview',
    sess_one: 'Session 1',
    sess_two: 'Session 2',
    sess_three: 'Session 3',
    sess_four: 'Session 4',
    sess_beginner: 'Beginner',
    sess_advanced: 'Advanced',
    free: 'Free',
    premium: 'Premium',
    chip_comp: 'Component',
    act_like: 'Like',
    act_liked: 'Liked',
    act_dl: 'Download',
    act_share: 'Share',
    act_cart: 'Add to cart',
    share_from: 'From Code with Bahareh',
    toast_liked: 'Added to your liked list ♥',
    toast_unliked: 'Removed from likes',
    toast_dl: 'Download started — check your files',
    toast_added: 'Added to cart ✓',
    toast_in_cart: 'Already in your cart',
    toast_copied: 'Link copied — paste it anywhere',
    toast_share_fail: 'Could not share on this browser',
    toast_cart_cleared: 'Cart cleared',
    cart_title: 'Your cart',
    cart_empty: 'Your cart is empty — add a premium course or component.',
    cart_total: 'Total:',
    cart_wa: 'Buy via WhatsApp',
    cart_mail: 'Buy via Email',
    cart_clear: 'Clear cart',
    cart_msg_head: 'Hi Bahareh, I would like to buy:',
    cart_mail_subj: 'Course purchase request',
    q_index_label: 'Jump to any answer',
    try_title: 'Try it yourself',
    try_code: 'Code',
    try_output: 'Output',
    try_reset: 'Reset',
    try_ph: 'Type your HTML here…',
    practice_quiz: 'Quiz',
    practice_ex: 'Exercises',
    ex_fill: 'Complete the code — type the missing tag:',
    ex_check: 'Check',
    ex_show: 'Show answer',
    ex_ans: 'Answer:',
    ex_blank: 'Missing tag',
    quiz_wrong: 'Not quite — try again',
    how_title: 'How this course works',
    how_s1_t: 'Questions & answers',
    how_s1_d: 'Every session is a journey of questions and answers — read the question, then read the full explanation.',
    how_s2_t: 'Try it yourself',
    how_s2_d: 'At the end of each session you can write and edit the code you just learned, then press Output to see the result.',
    how_s3_t: 'Quiz & exercises',
    how_s3_d: 'Each session also has a quiz and code exercises — we strongly recommend doing them for deep learning.',
    how_s4_t: 'Like & share',
    how_s4_d: 'Liked a lesson? Give it a like and share the link with your friends.',
    share_title: 'Share this lesson',
    share_copy: 'Copy link',
    share_native: 'Share…',
    seo_home: 'Code with Bahareh — Free & Premium HTML/CSS Courses',
    seo_home_d: 'Practical lessons. Real projects. Clean code. Interactive HTML/CSS courses and ready-made components.',
    seo_free: 'Free HTML & CSS Courses — Code with Bahareh',
    seo_free_d: 'Free beginner sessions on HTML structure, tags, and CSS first steps. Try the code, take the quiz, share any session.',
    seo_premium: 'Premium HTML & CSS Courses — Code with Bahareh',
    seo_premium_d: 'Premium sessions on semantic HTML, accessibility, SEO metadata, responsive design, Flexbox and Grid.',
    seo_comp: 'HTML & CSS Components — Code with Bahareh',
    seo_comp_d: 'Copy-paste glass buttons, navbars, heroes, pricing tables and portfolio grids — free and premium UI components.'
  },

  fa: {
    // ===== ناوبری =====
    skip: 'پرش به محتوا',
    menu: 'منو',
    theme_toggle: 'تغییر حالت روشن و تاریک',
    language_change: 'تغییر زبان',
    course_filters: 'فیلتر دوره‌ها',
    course_catalog: 'فهرست دوره‌ها',
    free_session_menu: 'جلسات دوره‌های رایگان',
    premium_session_menu: 'جلسات دوره‌های پرمیوم',
    back_to_top: 'بازگشت به بالای صفحه',
    cart_open: 'سبد خرید',
    cart_close: 'بستن سبد خرید',
    share_close: 'بستن پنجره اشتراک‌گذاری',
    code_sample: 'نمونه کد قابل پیمایش',
    cart_remove: 'حذف مورد',
    nav_home: 'خانه',
    nav_about: 'درباره من',
    nav_samples: 'نمونه‌کار',
    nav_courses: 'دوره‌ها',
    nav_contact: 'تماس',
    free_courses: 'دوره‌های رایگان',
    premium_courses: 'دوره‌های پرمیوم',
    components: 'کامپوننت‌ها',

    // ===== هیرو (بخش اصلی) =====
    hero_badge: 'توسعه‌دهنده وب فریلنس · مدرس برنامه‌نویسی',
    hero_code: 'کدنویسی با',
    hero_name: 'بهاره',
    hero_sub: 'از یادگیری تا ساخت پروژه',
    hero_slogan: 'آموزش کاربردی، تمرین واقعی، کد تمیز',
    cta_free: 'شروع دوره‌ی رایگان ←',
    cta_premium: 'دوره‌های پرمیوم ←',
    cta_hire: 'بزن بریم ←',
    scroll: 'اسکرول',

    // ===== درباره من =====
    about_eyebrow: 'درباره من',
    about_title: '',
    about_p1: '<strong>بهاره</strong> هستم — توسعه‌دهنده‌ی وب فریلنس و مدرس کدنویسی. ',
    about_p2: 'روش من ساده است: <strong>اول کوچک‌ترین چیزی که کار می‌کند را نشان بده</strong>، بعد آن را بزرگ کن. درس‌های کوتاه، پروژه‌های واقعی، کدی که واقعاً قابل استفاده باشد.',
    about_v1: 'ساخت وب‌سایت‌های سریع و در دسترس برای بنیان‌گذاران و کسب‌وکارهای کوچک',
    about_v2: 'دوره‌های رایگانی که واقعاً مفیدند',
    about_v3: 'دوره‌های پرمیوم با بازبینی شخصی کد',
    about_v4: 'قالب‌ها و کامپوننت‌های آماده',

    // ===== یوتیوب =====
    yt_eyebrow: 'یوتیوب',
    yt_title: 'یادگیری در <em>یوتیوب</em>',
    yt_sub: 'آموزش‌های رایگان، نکته‌ها و مرور پروژه‌ها',
    yt_cta: 'اشتراک در یوتیوب',
    st_subs: 'دنبال‌کننده',
    st_videos: 'ویدیو',
    st_views: 'بازدید کل',
    st_free: 'رایگان',

    // ===== سوالات متداول =====
    faq_eyebrow: 'سوالات متداول',
    faq_title: 'پرسش‌ها و <em>پاسخ‌ها</em>',

    // ===== تماس =====
    contact_eyebrow: 'تماس',
    contact_title: '',
    contact_lead: 'از پروژه‌ات بگو یا درباره‌ی دوره‌ها بپرس. ظرف 48 ساعت پاسخ می‌دهم.',
    contact_direct: 'تماس مستقیم',
    email: 'ایمیل',

    // ===== فرم تماس =====
    f_name: 'نام',
    f_email: 'ایمیل',
    f_subject: 'موضوع',
    f_budget: 'بودجه (اختیاری)',
    f_message: 'پیام',
    f_send: 'ارسال پیام',
    f_hint: 'پیام شما مستقیماً به ایمیل من می‌رسد. هرگز اسپم نمی‌فرستیم.',
    f_s1: 'سوال درباره‌ی دوره‌ی رایگان',
    f_s2: 'خرید دوره‌ی پرمیوم',
    f_s3: 'خرید قالب یا کامپوننت',
    f_s4: 'درخواست پروژه‌ی فریلنس',
    f_s5: 'موضوع دیگر',

    // ===== گزینه‌های بودجه (تومان) =====
    f_b0: 'مرتبط نیست',
    f_b1: '۱۵ میلیون تومان >',
    f_b2: '۱۵ - ۵۰ میلیون تومان',
    f_b3: '۵۰ - ۸۰ میلیون تومان',
    f_b4: '۸۰+ میلیون تومان',

    // ===== placeholderهای فرم =====
    f_name_placeholder: 'نام خود را وارد کنید',
    f_msg_placeholder: 'پیام خود را بنویسید',

    // ===== خطاهای فرم =====
    err_name: 'لطفاً نام خود را وارد کنید.',
    err_email: 'لطفاً یک ایمیل معتبر وارد کنید.',
    err_msg: 'لطفاً پیام کوتاهی بنویسید.',
    sending: 'در حال ارسال…',
    sent: 'سپاسگزارم! پیام شما ارسال شد — ظرف ۲۴ ساعت پاسخ می‌دهم.',
    sentMail: 'برنامه‌ی ایمیل شما با پیام آماده باز می‌شود.',
    send_fail: 'پیام ارسال نشد. لطفاً کمی بعد دوباره تلاش کنید.',

    // ===== فوتر =====
    foot_about: 'توانمندسازی نسل بعدی توسعه‌دهندگان وب با آموزش روشن، کاربردی و مدرن HTML و CSS.',
    foot_quick: 'دسترسی سریع',
    foot_courses: 'دوره‌ها',
    foot_c1: 'مبانی HTML (رایگان)',
    foot_c2: 'گام‌های اول CSS (رایگان)',
    foot_c3: 'طراحی واکنش‌گرا حرفه‌ای',
    foot_c4: 'انیمیشن‌های CSS',
    foot_c5: 'باندل کامل',
    foot_made: 'ساخته شده با',
    foot_clean: 'و کدِ تمیز',
    to_top: 'بالا',
    rights: 'تمام حقوق محفوظ است.',

    // ===== بخش دوره‌ها (تب‌ها) =====
    courses_eyebrow: 'دوره‌ها',
    courses_title: 'دوره‌ها و <em>کامپوننت‌ها</em> را بگرد',
    courses_lead: 'جلسات رایگان، دوره‌های عمیق پرمیوم و کامپوننت‌های آماده — لایک، دانلود، اشتراک‌گذاری و خرید، همه در یک‌جا.',
    courses_loading: 'محتوای دوره هنگام نزدیک‌شدن به این بخش بارگذاری می‌شود…',
    course_videos_eyebrow: 'جلسات یوتیوب',
    course_videos_title: 'با <em>جلسات ویدیویی</em> شروع کنید',
    course_videos_lead: 'چهار جلسهٔ رایگان به ترتیب یادگیری؛ هر جلسه را در یوتیوب باز کنید.',
    tab_free: 'دوره‌های رایگان',
    tab_premium: 'دوره‌های پرمیوم',
    tab_components: 'کامپوننت‌ها',
    coming_soon: 'به‌زودی',
    code_output: 'خروجی',
    code_tab: 'پیش‌نمایش',
    sess_one: 'جلسه اول',
    sess_two: 'جلسه دوم',
    sess_three: 'جلسه سوم',
    sess_four: 'جلسه چهارم',
    sess_beginner: 'مبتدی',
    sess_advanced: 'پیشرفته',
    free: 'رایگان',
    premium: 'پرمیوم',
    chip_comp: 'کامپوننت',
    act_like: 'لایک',
    act_liked: 'لایک شد',
    act_dl: 'دانلود',
    act_share: 'اشتراک‌گذاری',
    act_cart: 'افزودن به سبد',
    share_from: 'از Code with Bahareh',
    toast_liked: 'به لایک‌شده‌ها اضافه شد ♥',
    toast_unliked: 'از لایک‌شده‌ها حذف شد',
    toast_dl: 'دانلود شروع شد — فایل‌های خود را ببینید',
    toast_added: 'به سبد خرید اضافه شد ✓',
    toast_in_cart: 'قبلاً در سبد شماست',
    toast_copied: 'لینک کپی شد — هرجا خواستید بچسبانید',
    toast_share_fail: 'در این مرورگر اشتراک‌گذاری ممکن نیست',
    toast_cart_cleared: 'سبد خرید خالی شد',
    cart_title: 'سبد خرید شما',
    cart_empty: 'سبد خرید شما خالی است — یک دوره یا کامپوننت پرمیوم اضافه کنید.',
    cart_total: 'جمع کل:',
    cart_wa: 'خرید با واتساپ',
    cart_mail: 'خرید با ایمیل',
    cart_clear: 'خالی کردن سبد',
    cart_msg_head: 'سلام بهاره، می‌خواهم خرید کنم:',
    cart_mail_subj: 'درخواست خرید دوره',
    q_index_label: 'برای دیدن پاسخ، روی هر سوال کلیک کنید',
    try_title: 'خودتان امتحان کنید',
    try_code: 'کد',
    try_output: 'خروجی',
    try_reset: 'بازنشانی',
    try_ph: 'HTML خود را اینجا بنویسید…',
    practice_quiz: 'کوییز',
    practice_ex: 'تمرین‌ها',
    ex_fill: 'کد را کامل کنید — تگ جاافتاده را بنویسید:',
    ex_check: 'بررسی',
    ex_show: 'نمایش جواب',
    ex_ans: 'جواب:',
    ex_blank: 'تگ جاافتاده',
    quiz_wrong: 'اشتباه است — دوباره تلاش کن',
    how_title: 'این دوره چطور کار می‌کند',
    how_s1_t: 'سوال و جواب',
    how_s1_d: 'هر جلسه با پرسش و پاسخ پیش می‌رود — سوال را بخوانید و بعد توضیح کامل را مطالعه کنید.',
    how_s2_t: 'خودتان امتحان کنید',
    how_s2_d: 'در انتهای هر جلسه می‌توانید کدهایی را که یاد گرفته‌اید بنویسید و تغییر دهید و با دکمه‌ی Output نتیجه را ببینید.',
    how_s3_t: 'کوییز و تمرین',
    how_s3_d: 'هر جلسه کوییز و تمرین کدنویسی هم دارد — پیشنهاد می‌شود برای یادگیری خوب حتماً آن‌ها را انجام دهید.',
    how_s4_t: 'لایک و اشتراک‌گذاری',
    how_s4_d: 'از یک درس خوشتان آمد؟ لایک کنید و لینکش را با دوستانتان به اشتراک بگذارید.',
    share_title: 'اشتراک‌گذاری این درس',
    share_copy: 'کپی لینک',
    share_native: 'اشتراک‌گذاری…',
    seo_home: 'کدنویسی با بهاره — دوره‌های رایگان و پرمیوم HTML/CSS',
    seo_home_d: 'درس‌های کاربردی، پروژه‌های واقعی و کد تمیز؛ دوره‌های تعاملی HTML/CSS و کامپوننت‌های آماده.',
    seo_free: 'دوره‌های رایگان HTML و CSS — کدنویسی با بهاره',
    seo_free_d: 'جلسات رایگان مبانی HTML، تگ‌ها و قدم‌های اول CSS. کد را امتحان کنید، کوییز بدهید و هر جلسه را به اشتراک بگذارید.',
    seo_premium: 'دوره‌های پرمیوم HTML و CSS — کدنویسی با بهاره',
    seo_premium_d: 'جلسات پرمیوم HTML معنایی، دسترس‌پذیری، متادیتای SEO، طراحی ریسپانسیو، فلکس‌باکس و گرید.',
    seo_comp: 'کامپوننت‌های HTML و CSS — کدنویسی با بهاره',
    seo_comp_d: 'دکمه‌های شیشه‌ای، نوار ناوبری، هیرو، جدول قیمت و گرید نمونه‌کار — آماده کپی در پروژه شما.'
  },

  it: {
    // ===== ناوبری =====
    skip: 'Vai al contenuto',
    menu: 'Menu',
    theme_toggle: 'Attiva modalità chiara o scura',
    language_change: 'Cambia lingua',
    course_filters: 'Filtri dei corsi',
    course_catalog: 'Catalogo dei corsi',
    free_session_menu: 'Lezioni dei corsi gratuiti',
    premium_session_menu: 'Lezioni dei corsi premium',
    back_to_top: 'Torna in alto',
    cart_open: 'Carrello',
    cart_close: 'Chiudi carrello',
    share_close: 'Chiudi finestra di condivisione',
    code_sample: 'Esempio di codice scorrevole',
    cart_remove: 'Rimuovi elemento',
    nav_home: 'Home',
    nav_about: 'Chi sono',
    nav_samples: 'Esempi',
    nav_courses: 'Corsi',
    nav_contact: 'Contatti',
    free_courses: 'Corsi gratuiti',
    premium_courses: 'Corsi premium',
    components: 'Componenti',

    // ===== هیرو (بخش اصلی) =====
    hero_badge: 'Sviluppatrice Web Freelance · Educatrice di Coding',
    hero_code: 'programma con',
    hero_name: 'Bahareh',
    hero_sub: 'Corsi HTML/CSS gratuiti e premium',
    hero_slogan: 'Lezioni pratiche. Progetti reali. Codice pulito',
    cta_free: 'Inizia il corso gratuito →',
    cta_premium: 'Corsi premium →',
    cta_hire: 'Assumimi →',
    scroll: 'Scorri',

    // ===== درباره من =====
    about_eyebrow: 'Chi sono',
    about_title: 'Perché imparare con me — e perché <em>assumermi</em>',
    about_p1: 'Sono <strong>Bahareh</strong> — sviluppatrice web freelance ed educatrice di programmazione. Creo siti veloci e accessibili per fondatori e piccole imprese, e insegno ai principianti a scrivere la loro prima riga di HTML senza paura.',
    about_p2: 'Il mio metodo è semplice: <strong>mostra prima la cosa più piccola che funziona</strong>, poi falla crescere. Lezioni brevi, progetti reali, codice pubblicabile.',
    about_v1: 'Siti veloci e accessibili per fondatori e piccole imprese',
    about_v2: 'Corsi gratuiti davvero utili',
    about_v3: 'Corsi premium con revisione del codice',
    about_v4: 'Template e componenti pronti',

    // ===== یوتیوب =====
    yt_eyebrow: 'YouTube',
    yt_title: 'Impara su <em>YouTube</em>',
    yt_sub: 'Tutorial gratuiti, consigli e progetti passo passo',
    yt_cta: 'Iscriviti su YouTube',
    st_subs: 'Iscritti',
    st_videos: 'Video',
    st_views: 'Visual. totali',
    st_free: 'Gratis',

    // ===== سوالات متداول =====
    faq_eyebrow: 'FAQ',
    faq_title: 'Domande, <em>risposte</em>',

    // ===== تماس =====
    contact_eyebrow: 'Contatti',
    contact_title: '<em>Costruiamo</em> qualcosa',
    contact_lead: 'Raccontami il tuo progetto o chiedi di un corso. Rispondo entro 24 ore.',
    contact_direct: 'Contatto diretto',
    email: 'Email',

    // ===== فرم تماس =====
    f_name: 'Nome',
    f_email: 'Email',
    f_subject: 'Oggetto',
    f_budget: 'Budget (facoltativo)',
    f_message: 'Messaggio',
    f_send: 'Invia messaggio',
    f_hint: 'Il messaggio arriva direttamente nella mia casella. Mai spam.',
    f_s1: 'Domanda su un corso gratuito',
    f_s2: 'Acquistare un corso premium',
    f_s3: 'Acquistare un template o componente',
    f_s4: 'Richiesta progetto freelance',
    f_s5: 'Altro',

    // ===== گزینه‌های بودجه (یورو) =====
    f_b0: 'Non applicabile',
    f_b1: '< €500',
    f_b2: '€500 – €1.500',
    f_b3: '€1.500 – €4.000',
    

    // ===== placeholderهای فرم =====
    f_name_placeholder: 'Inserisci il tuo nome',
    f_msg_placeholder: 'Scrivi il tuo messaggio',

    // ===== خطاهای فرم =====
    err_name: 'Inserisci il tuo nome.',
    err_email: 'Inserisci un indirizzo email valido.',
    err_msg: 'Scrivi un breve messaggio.',
    sending: 'Invio in corso…',
    sent: 'Grazie! Il messaggio è in viaggio — rispondo entro 24 ore.',
    sentMail: 'La tua app email si sta aprendo con il messaggio pronto.',
    send_fail: 'Impossibile inviare il messaggio. Riprova tra poco.',

    // ===== فوتر =====
    foot_about: 'Formiamo la prossima generazione di sviluppatori web con un\u2019istruzione HTML e CSS chiara, pratica e moderna.',
    foot_quick: 'Link rapidi',
    foot_courses: 'Corsi',
    foot_c1: 'Basi di HTML (Gratis)',
    foot_c2: 'Primi passi CSS (Gratis)',
    foot_c3: 'Responsive Design Pro',
    foot_c4: 'Animazioni CSS',
    foot_c5: 'Bundle completo',
    foot_made: 'Creato con',
    foot_clean: 'e codice pulito',
    to_top: 'Su',
    rights: 'Tutti i diritti riservati.',
    // ===== بخش دوره‌ها (tab UI) =====
    courses_eyebrow: 'Corsi',
    courses_title: 'Esplora i <em>corsi</em> e i componenti',
    courses_lead: 'Sessioni gratuite, approfondimenti premium e componenti pronti — metti mi piace, scarica, condividi e acquista in un unico posto.',
    courses_loading: 'I contenuti del corso vengono caricati quando ti avvicini a questa sezione…',
    course_videos_eyebrow: 'Lezioni YouTube',
    course_videos_title: 'Inizia con le <em>video lezioni</em>',
    course_videos_lead: 'Quattro lezioni gratuite in ordine di apprendimento: apri una lezione su YouTube.',
    tab_free: 'Corsi gratuiti',
    tab_premium: 'Corsi premium',
    tab_components: 'Componenti',
    coming_soon: 'Prossimamente',
    code_output: 'Risultato',
    code_tab: 'Anteprima',
    sess_one: 'Lezione 1',
    sess_two: 'Lezione 2',
    sess_three: 'Lezione 3',
    sess_four: 'Lezione 4',
    sess_beginner: 'Principiante',
    sess_advanced: 'Avanzato',
    free: 'Gratis',
    premium: 'Premium',
    chip_comp: 'Componente',
    act_like: 'Mi piace',
    act_liked: 'Piaciuto',
    act_dl: 'Scarica',
    act_share: 'Condividi',
    act_cart: 'Aggiungi al carrello',
    share_from: 'Da Code with Bahareh',
    toast_liked: 'Aggiunto ai preferiti ♥',
    toast_unliked: 'Rimosso dai preferiti',
    toast_dl: 'Download avviato — controlla i tuoi file',
    toast_added: 'Aggiunto al carrello ✓',
    toast_in_cart: 'Già nel carrello',
    toast_copied: 'Link copiato negli appunti',
    toast_share_fail: 'Impossibile condividere su questo browser',
    toast_cart_cleared: 'Carrello svuotato',
    cart_title: 'Il tuo carrello',
    cart_empty: 'Il tuo carrello è vuoto — aggiungi un corso premium o un componente.',
    cart_total: 'Totale:',
    cart_wa: 'Acquista via WhatsApp',
    cart_mail: 'Acquista via Email',
    cart_clear: 'Svuota carrello',
    cart_msg_head: 'Ciao Bahareh, vorrei acquistare:',
    cart_mail_subj: 'Richiesta acquisto corso',
    q_index_label: 'Salta a una risposta',
    try_title: 'Prova tu stesso',
    try_code: 'Codice',
    try_output: 'Risultato',
    try_reset: 'Reimposta',
    try_ph: 'Scrivi qui il tuo codice HTML…',
    practice_quiz: 'Quiz',
    practice_ex: 'Esercizi',
    ex_fill: 'Completa il codice — inserisci il tag mancante:',
    ex_check: 'Verifica',
    ex_show: 'Mostra risposta',
    ex_ans: 'Risposta:',
    ex_blank: 'Tag mancante',
    quiz_wrong: 'Risposta sbagliata — riprova.',
    how_title: 'Come funziona questo corso',
    how_s1_t: 'Domande e risposte',
    how_s1_d: 'Ogni lezione è un percorso di domande e risposte — leggi la domanda, poi scopri la spiegazione completa.',
    how_s2_t: 'Prova tu stesso',
    how_s2_d: 'Alla fine di ogni lezione puoi scrivere e modificare il codice appena appreso e premere Risultato per vedere l\'anteprima.',
    how_s3_t: 'Quiz ed esercizi',
    how_s3_d: 'Ogni lezione include un quiz ed esercizi di codice pratici — consigliati per un apprendimento profondo.',
    how_s4_t: 'Mi piace e condividi',
    how_s4_d: 'Ti è piaciuta la lezione? Metti un mi piace e condividi il link con i tuoi amici.',
    share_title: 'Condividi questa lezione',
    share_copy: 'Copia link',
    share_native: 'Condividi…',
    seo_home: 'Code with Bahareh — Corsi HTML/CSS gratuiti e premium',
    seo_home_d: 'Lezioni pratiche, progetti reali e codice pulito; corsi HTML/CSS interattivi e componenti pronti.',
    seo_free: 'Corsi Gratuiti HTML & CSS — Code with Bahareh',
    seo_free_d: 'Lezioni gratuite per principianti su struttura HTML, tag e primi passi CSS. Prova il codice e fai i quiz.',
    seo_premium: 'Corsi Premium HTML & CSS — Code with Bahareh',
    seo_premium_d: 'Lezioni premium su HTML semantico, accessibilità, SEO e metadati, responsive design, Flexbox e CSS Grid.',
    seo_comp: 'Componenti HTML & CSS — Code with Bahareh',
    seo_comp_d: 'Pulsanti in vetro, navbar responsive, sezioni hero, tabelle prezzi e griglie portfolio — componenti UI pronti.'
  }
}
};

/* ---------- complete Italian lesson content ---------- */
/* Technical identifiers and runnable code stay unchanged; all learner-facing
   explanations, Q&A and quiz wording are Italian on the /it/ page. */
var ITALIAN_COURSE_CONTENT = {
  "html-s1": {
    "qa": [
      {"q":"Che cos’è HTML5?","a":"<p><b>HTML5</b> è la quinta principale versione di HTML, il linguaggio che descrive la struttura delle pagine web. Ha introdotto elementi semantici come <code>&lt;header&gt;</code> e <code>&lt;main&gt;</code>, oltre al supporto nativo per audio, video e grafica canvas.</p><p>Una pagina HTML5 contiene di norma <code>&lt;head&gt;</code> per i metadati e <code>&lt;body&gt;</code> per il contenuto visibile. La dichiarazione <code>&lt;!DOCTYPE html&gt;</code> comunica al browser che deve usare gli standard HTML5.</p>"},
      {"q":"Che cos’è un tag e come lo interpreta il browser?","a":"<p>Un <b>tag</b> è un’istruzione tra parentesi angolari, per esempio <code>&lt;p&gt;</code> o <code>&lt;h1&gt;</code>. Indica al browser il significato del contenuto.</p><p>Molti tag formano una coppia: <code>&lt;p&gt;</code> apre un paragrafo e <code>&lt;/p&gt;</code> lo chiude. Insieme formano un elemento. Tag come <code>&lt;img&gt;</code> e <code>&lt;br&gt;</code> non racchiudono contenuto e non richiedono un tag di chiusura.</p>"},
      {"q":"A cosa serve il tag head?","a":"<p><code>&lt;head&gt;</code> contiene informazioni sulla pagina, non il contenuto mostrato nel documento. Qui si trovano <code>&lt;title&gt;</code>, meta description, charset, viewport e i collegamenti ai file CSS.</p><p>Questi dati aiutano browser, motori di ricerca e dispositivi a presentare correttamente la pagina; il loro contenuto non appare direttamente nella schermata.</p>"},
      {"q":"A cosa servono i tag body, main e footer?","a":"<p><code>&lt;body&gt;</code> contiene tutto ciò che l’utente vede e usa. Al suo interno, <code>&lt;main&gt;</code> identifica il contenuto principale e unico della pagina, mentre <code>&lt;footer&gt;</code> raccoglie informazioni finali come copyright, collegamenti e contatti.</p><p>Questi tag semantici danno significato alla struttura e migliorano accessibilità e SEO.</p>"}
    ],
    "quiz": [
      {"q":"Che cos’è HTML5?","opts":["Un linguaggio di programmazione come Python","La quinta principale versione di HTML","Un framework CSS","Un sistema di database"]},
      {"q":"Dove si trova il contenuto visibile di una pagina?","opts":["Nel head","Nel body","Nel title","Nei meta tag"]},
      {"q":"Che cosa comunica al browser &lt;!DOCTYPE html&gt;?","opts":["Questa pagina è HTML5","Di caricare CSS","La lingua della pagina","Nulla di importante"]}
    ]
  },
  "html-s2": {
    "qa": [
      {"q":"Come interagiscono i browser web con HTML?","a":"<p>Il browser riceve il file HTML dal server, lo analizza e costruisce il <b>DOM</b>, cioè l’albero degli elementi della pagina. Poi applica CSS per lo stile ed esegue JavaScript per il comportamento.</p><p>Infine renderizza i pixel sullo schermo. Il browser non mostra il codice sorgente: mostra il risultato del percorso richiesta → parsing → DOM → stile → rendering.</p>"},
      {"q":"Che cosa rende HTML così potente?","a":"<p>HTML è leggibile, universale e supportato da tutti i browser e dispositivi. È la base del web e i suoi elementi semantici, come <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;footer&gt;</code>, comunicano il significato dei contenuti.</p><p>Funziona insieme a CSS, JavaScript e framework moderni, offrendo a tutti una struttura comune per creare pagine accessibili.</p>"},
      {"q":"Perché HTML non è un linguaggio di programmazione?","a":"<p>Un linguaggio di programmazione usa logica, variabili, condizioni, cicli e funzioni. HTML non calcola né prende decisioni: descrive e organizza i contenuti.</p><p>HTML è un linguaggio di markup: definisce che cosa è un testo, un titolo o un link. CSS cura l’aspetto e JavaScript definisce il comportamento.</p>"}
    ],
    "quiz": [
      {"q":"Che cosa costruisce il browser dal tuo HTML?","opts":["Il DOM, un albero di elementi","Un file PDF","Un database","Un’immagine"]},
      {"q":"Qual è l’ordine corretto per una pagina?","opts":["stile → parsing → richiesta","richiesta → parsing → rendering","rendering → richiesta → parsing","parsing → richiesta → stile"]},
      {"q":"HTML è un linguaggio di programmazione?","opts":["Sì, come JavaScript","No, è un linguaggio di markup","Solo in HTML5","Solo con CSS"]}
    ]
  },
  "html-s3": {
    "qa": [
      {"q":"Come creo un elenco in HTML?","a":"<p>Usa <code>&lt;ul&gt;</code> per un elenco puntato e <code>&lt;ol&gt;</code> per un elenco numerato. Ogni voce usa il tag <code>&lt;li&gt;</code>.</p><p>Gli elenchi sono adatti a gruppi di elementi correlati, come passaggi, menu o ingredienti, e non dovrebbero essere usati soltanto per il layout.</p>"},
      {"q":"Come funzionano i link?","a":"<p>Il tag <code>&lt;a&gt;</code> crea un collegamento. L’attributo <code>href</code> contiene la destinazione: un’altra pagina, una sezione identificata da <code>#id</code> o un altro indirizzo.</p><p>Il testo del link deve spiegare chiaramente dove porta il collegamento, evitando testi generici come “clicca qui”.</p>"},
      {"q":"Come aggiungo correttamente un’immagine?","a":"<p>Usa <code>&lt;img&gt;</code> con un valore <code>src</code> corretto e un testo <code>alt</code> utile. Specifica anche <code>width</code> e <code>height</code> per ridurre gli spostamenti del layout durante il caricamento.</p><p>Se l’immagine è soltanto decorativa, usa <code>alt=&quot;&quot;</code>.</p>"}
    ],
    "quiz": [
      {"q":"Quale tag crea un elenco numerato?","opts":["ul","ol","li","nav"]},
      {"q":"Che cosa contiene href?","opts":["Il file dell’immagine","La destinazione del link","Il titolo della pagina","Un colore"]},
      {"q":"Perché ogni immagine ha bisogno di alt?","opts":["Per renderla più grande","Per mantenere il significato con screen reader e immagini non caricate","Per caricare CSS","Perché è una decorazione facoltativa"]}
    ]
  },
  "html-s4": {
    "qa": [
      {"q":"Come è costruita una tabella HTML?","a":"<p>Una tabella usa <code>&lt;table&gt;</code> come contenitore, <code>&lt;tr&gt;</code> per le righe, <code>&lt;th&gt;</code> per le celle di intestazione e <code>&lt;td&gt;</code> per le celle di dati. <code>&lt;thead&gt;</code> e <code>&lt;tbody&gt;</code> rendono la struttura più chiara.</p><p>Usa le tabelle per dati realmente tabellari, non per costruire il layout della pagina.</p>"},
      {"q":"Di cosa ha bisogno un form?","a":"<p>Un form accessibile contiene <code>&lt;form&gt;</code>, campi con <code>name</code>, label associate, una validazione appropriata e un pulsante <code>type=&quot;submit&quot;</code>.</p><p>Imposta tipi di input corretti, come <code>email</code> o <code>tel</code>, così browser e dispositivi mobili possono aiutare l’utente a inserire i dati.</p>"},
      {"q":"Perché una label deve essere collegata al suo input?","a":"<p>Una <code>&lt;label&gt;</code> associata tramite <code>for</code> e <code>id</code> rende chiaro lo scopo del campo agli screen reader e amplia l’area cliccabile.</p><p>È una pratica essenziale per accessibilità, usabilità e compilazione corretta del form.</p>"}
    ],
    "quiz": [
      {"q":"Una cella di intestazione di tabella è…","opts":["td","th","tr","p"]},
      {"q":"Una label si collega a un input con…","opts":["class e name","for e id","src e href","alt e title"]},
      {"q":"Quale pulsante invia un form?","opts":["type=&quot;button&quot;","type=&quot;submit&quot;","un div","solo type=&quot;reset&quot;"]}
    ]
  },
  "css-s1": {
    "qa": [
      {"q":"Che cos’è CSS e cosa significa la sigla?","a":"<p>CSS significa <b>Cascading Style Sheets</b>. È il linguaggio che definisce colori, font, spaziature, bordi, layout e animazioni di una pagina web.</p><p>HTML definisce la struttura, mentre CSS ne definisce l’aspetto. Separare contenuto e stile permette di aggiornare il design senza modificare la struttura HTML.</p>"},
      {"q":"Come colleghiamo CSS a HTML?","a":"<p>Il metodo consigliato è un file esterno collegato nel <code>&lt;head&gt;</code> con <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;</code>. Il browser può memorizzarlo nella cache e riutilizzarlo.</p><p>Puoi usare anche <code>&lt;style&gt;</code> per una pagina singola o l’attributo inline <code>style</code>, ma quest’ultimo va evitato nei progetti reali.</p>"},
      {"q":"Che cos’è un selettore?","a":"<p>Un selettore è la parte di una regola CSS che decide quali elementi riceveranno lo stile. Per esempio, <code>p</code> seleziona tutti i paragrafi, <code>.btn</code> una classe e <code>#hero</code> un id univoco.</p><p>Quando più regole competono, la specificità e l’ordine delle regole decidono quale stile prevale.</p>"}
    ],
    "quiz": [
      {"q":"CSS significa…","opts":["Creative Style Sheets","Cascading Style Sheets","Computer Styling System","Color Style System"]},
      {"q":"Qual è il modo migliore per collegare CSS a HTML?","opts":["Un file esterno con un tag link","Uno stile inline su ogni tag","Un documento Word","Un database"]},
      {"q":"Quale selettore applica stile a ogni p della pagina?","opts":["p { }",".p { }","#p { }","&lt;p&gt; { }"]}
    ]
  },
  "css-s2": {
    "qa": [
      {"q":"Che cos’è il box model?","a":"<p>Ogni elemento web è una scatola rettangolare con quattro livelli: contenuto, <b>padding</b>, bordo e <b>margin</b>. Il padding è lo spazio interno tra contenuto e bordo; il margin è lo spazio esterno che separa gli elementi.</p><p>Usare <code>box-sizing: border-box</code> rende più semplice calcolare dimensioni e layout.</p>"},
      {"q":"Come scelgo colori e font?","a":"<p>I colori possono usare nomi, valori hex, <code>rgb()</code> o <code>hsl()</code>. Definisci una palette con variabili CSS in <code>:root</code> per riutilizzare i colori in modo coerente.</p><p>Per la tipografia scegli al massimo due famiglie di font, includi sempre un fallback e usa unità <code>rem</code> per rispettare le impostazioni dell’utente.</p>"},
      {"q":"Come centro gli elementi?","a":"<p>Per centrare testo usa <code>text-align: center</code>. Per un blocco con larghezza definita usa <code>margin-inline: auto</code>. Per allineare elementi in entrambe le direzioni, Flexbox e Grid sono le soluzioni più affidabili.</p><p>Con Flexbox, <code>justify-content</code> e <code>align-items</code> permettono di allineare rapidamente un gruppo di elementi.</p>"}
    ],
    "quiz": [
      {"q":"Che cosa si trova tra il contenuto e il bordo?","opts":["margin","padding","gap","spaziatura"]},
      {"q":"Come si centra il TESTO?","opts":["margin-inline: auto","text-align: center","display: grid","float: center"]},
      {"q":"Quale unità rispetta le impostazioni del font dell’utente?","opts":["px","vw","rem","pt"]}
    ]
  },
  "css-s3": {
    "qa": [
      {"q":"Che cosa fa display:flex?","a":"<p><code>display: flex</code> trasforma un contenitore in un flex container. I suoi figli diventano flex item e si dispongono lungo un asse, in riga per impostazione predefinita.</p><p>È ideale per barre di navigazione, gruppi di pulsanti e righe di card.</p>"},
      {"q":"Come distanzio e mando a capo gli elementi?","a":"<p>Usa <code>gap</code> per lo spazio fra gli elementi, <code>justify-content</code> per l’asse principale e <code>flex-wrap: wrap</code> per consentire il passaggio alla riga successiva.</p><p>Queste proprietà evitano overflow e mantengono il layout leggibile su schermi piccoli.</p>"},
      {"q":"Che cosa significa flex:1 su un elemento?","a":"<p><code>flex: 1</code> dice all’elemento di crescere e condividere equamente lo spazio disponibile con gli altri elementi flessibili.</p><p>Combinalo con una base o con <code>flex-wrap</code> quando vuoi card elastiche che non diventino troppo strette.</p>"}
    ],
    "quiz": [
      {"q":"display:flex dispone gli elementi lungo…","opts":["Un asse","Un cerchio","Solo l’asse z","Il server"]},
      {"q":"Quale proprietà aggiunge spazio TRA gli elementi?","opts":["padding","gap","font-size","color"]},
      {"q":"Che cosa fa flex-wrap:wrap?","opts":["Nasconde l’overflow","Permette agli elementi di andare alla riga successiva","Cambia colore","Rimuove il contenitore"]}
    ]
  },
  "css-s4": {
    "qa": [
      {"q":"Che cos’è :hover?","a":"<p><code>:hover</code> è una pseudo-classe CSS che applica uno stile mentre il puntatore si trova sopra un elemento. È utile per offrire un feedback visivo su link e pulsanti.</p><p>Non affidare contenuti importanti solo a hover, perché la maggior parte dei dispositivi touch non ha un vero puntatore hover.</p>"},
      {"q":"Che cosa fa transition?","a":"<p>La proprietà <code>transition</code> rende graduale il passaggio fra due stati CSS, per esempio un cambio di colore, ombra o trasformazione.</p><p>Le transizioni brevi, spesso intorno a 0,2–0,3 secondi, rendono l’interfaccia più chiara senza rallentare l’utente.</p>"},
      {"q":"Come trasformo una riga in una colonna sui telefoni?","a":"<p>Usa una media query e modifica <code>flex-direction</code> in <code>column</code> quando lo spazio diventa insufficiente. Un approccio mobile-first parte da una base semplice per schermi piccoli e aggiunge miglioramenti con <code>min-width</code>.</p><p>Assicurati anche di avere il meta tag viewport nel documento.</p>"}
    ],
    "quiz": [
      {"q":":hover si applica quando…","opts":["Il puntatore è sopra l’elemento","La pagina si carica","L’utente stampa","JavaScript è disattivato"]},
      {"q":"Una buona durata della transition è circa…","opts":["5 secondi","0,25 secondi","0 millisecondi","1 minuto"]},
      {"q":"Di quale meta tag hanno bisogno i telefoni?","opts":["solo charset","viewport","og:image","solo theme-color"]}
    ]
  },
  "js-s1": {
    "qa": [
      {"q":"Che cos’è JavaScript?","a":"<p><b>JavaScript</b> è il linguaggio del comportamento sul web. HTML fornisce la struttura, CSS l’aspetto e JavaScript gestisce azioni come click, messaggi, calcoli e aggiornamenti dinamici.</p><p>Viene eseguito dal browser dopo la lettura della pagina e può modificare il DOM in risposta alle azioni dell’utente.</p>"},
      {"q":"Che cos’è una variabile?","a":"<p>Una variabile è un nome associato a un valore. In JavaScript moderno usa <code>const</code> per un valore che non verrà riassegnato e <code>let</code> per un valore che può cambiare.</p><p>Dai alle variabili nomi chiari: rendono il codice più facile da capire e mantenere.</p>"},
      {"q":"Come trova un elemento uno script?","a":"<p><code>document.getElementById(&quot;go&quot;)</code> trova l’elemento con id <code>go</code>. Dopo puoi leggere o cambiare <code>textContent</code>, classi e attributi, oppure aggiungere un listener di click.</p><p>Un id deve essere unico nella pagina per evitare ambiguità.</p>"}
    ],
    "quiz": [
      {"q":"JavaScript serve principalmente per…","opts":["La struttura della pagina","Il comportamento della pagina","La memorizzazione del database","Solo il layout di stampa"]},
      {"q":"Quale keyword crea una variabile che può cambiare?","opts":["const","let","html","href"]},
      {"q":"getElementById trova un elemento tramite il suo…","opts":["class","id","colore","nome del file"]}
    ]
  },
  "js-s2": {
    "qa": [
      {"q":"Che cos’è il DOM?","a":"<p>Il <b>DOM</b>, Document Object Model, è l’albero vivo che il browser crea a partire da HTML. JavaScript non modifica direttamente il file: modifica questo albero di nodi.</p><p>Quando cambi un nodo del DOM, il browser aggiorna la pagina visibile.</p>"},
      {"q":"Come funzionano gli eventi?","a":"<p>Un evento è qualcosa che accade, come un click, un input o l’invio di un form. <code>addEventListener</code> ascolta quell’evento e quindi esegue una funzione.</p><p>Questo approccio mantiene HTML pulito e separa struttura, stile e comportamento.</p>"},
      {"q":"Perché modificare una class invece di uno style?","a":"<p><code>classList.toggle(&quot;is-on&quot;)</code> aggiunge o rimuove una classe. Le regole visive restano in CSS, mentre JavaScript decide soltanto quando applicarle.</p><p>La separazione rende il codice più leggibile, riutilizzabile e facile da animare.</p>"}
    ],
    "quiz": [
      {"q":"Il DOM è…","opts":["Un file CSS","L’albero vivo della pagina","Un database","Il log del server"]},
      {"q":"addEventListener aspetta…","opts":["Un font","Un evento come un click","Una sitemap","Un token di colore"]},
      {"q":"Che cosa fa classList.toggle?","opts":["Elimina l’elemento","Aggiunge o rimuove una classe","Carica un’immagine","Cambia l’URL"]}
    ]
  },
  "html-p1": {
    "qa": [
      {"q":"Che cos’è HTML semantico e perché è importante?","a":"<p>HTML semantico significa scegliere il tag che esprime il significato del contenuto, ad esempio <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code> e <code>&lt;footer&gt;</code>, invece di usare solo <code>&lt;div&gt;</code>.</p><p>Questa scelta migliora SEO, navigazione con screen reader e manutenzione del codice.</p>"},
      {"q":"Che cos’è ARIA e quando dovrei usarlo?","a":"<p>ARIA aggiunge ruoli, nomi e stati ai componenti personalizzati per renderli comprensibili alle tecnologie assistive. Preferisci sempre un elemento HTML nativo quando esiste.</p><p>Usa ARIA solo quando HTML nativo non può esprimere il comportamento necessario, e verifica il risultato con uno screen reader.</p>"},
      {"q":"Come rendo accessibili i form?","a":"<p>Ogni input deve avere una label associata, un tipo di campo appropriato e messaggi di errore testuali. Raggruppa campi correlati con <code>&lt;fieldset&gt;</code> e <code>&lt;legend&gt;</code> quando serve.</p><p>Un pulsante deve indicare chiaramente l’azione, per esempio “Invia messaggio”.</p>"}
    ],
    "quiz": [
      {"q":"Quale tag identifica il contenuto principale e unico?","opts":["main","aside","nav","div"]},
      {"q":"Quando dovresti usare ARIA?","opts":["Sempre","Solo quando HTML nativo non può esprimerlo","Mai","Solo per le immagini"]},
      {"q":"Una label si collega al suo input con…","opts":["class e id","for e id","name e type","href e src"]}
    ]
  },
  "html-p2": {
    "qa": [
      {"q":"Quali meta tag contano davvero per SEO?","a":"<p>I più importanti sono un <code>&lt;title&gt;</code> chiaro, una meta description, una canonical URL, il viewport e l’attributo <code>lang</code> sul tag HTML.</p><p>Per la condivisione usa Open Graph e Twitter card; i dati strutturati JSON-LD aiutano i motori di ricerca a comprendere meglio i contenuti.</p>"},
      {"q":"Che cos’è il dato strutturato schema.org?","a":"<p>Il dato strutturato è un vocabolario standard, spesso inserito come JSON-LD nel <code>&lt;head&gt;</code>, che descrive il tipo di contenuto della pagina a motori di ricerca e servizi.</p><p>Per esempio può indicare che una pagina è un corso, un prodotto o una FAQ. Va sempre mantenuto coerente con il contenuto visibile.</p>"},
      {"q":"Come faccio a caricare velocemente le immagini?","a":"<p>Usa formati moderni come WebP o AVIF, immagini della dimensione corretta e <code>loading=&quot;lazy&quot;</code> per le immagini sotto la piega. Specifica sempre width e height per limitare il layout shift.</p><p>Comprimere le immagini e usare <code>srcset</code> riduce i dati scaricati sui dispositivi piccoli.</p>"}
    ],
    "quiz": [
      {"q":"Dove appare la meta description?","opts":["Nella scheda del browser","Nei risultati di ricerca","Sull’immagine","Nell’URL"]},
      {"q":"og:title viene usato per…","opts":["I motori di ricerca","La condivisione sui social","I database","La stampa"]},
      {"q":"WebP è…","opts":["Un linguaggio di programmazione","Un moderno formato immagine","Una proprietà CSS","Un font"]}
    ]
  },
  "css-p1": {
    "qa": [
      {"q":"Che cosa significa responsive design?","a":"<p>Un sito responsive adatta layout e contenuti a telefoni, tablet, laptop e schermi grandi. Usa griglie fluide, immagini flessibili e media query basate sullo spazio disponibile.</p><p>Le breakpoints devono seguire le necessità del contenuto, non semplicemente il nome di un dispositivo.</p>"},
      {"q":"Come funzionano le media query?","a":"<p>Una media query applica CSS solo quando una condizione è vera, per esempio <code>@media (max-width: 768px)</code>. Puoi usare <code>min-width</code> per aggiungere miglioramenti progressivi a layout mobile-first.</p><p>Scegli le condizioni in base a quando il design necessita realmente di cambiare.</p>"},
      {"q":"Che cos’è clamp() e perché è utile?","a":"<p><code>clamp(MIN, VALORE, MAX)</code> consente a una misura di crescere in modo fluido senza superare un minimo o un massimo. È ideale per font, spaziature e dimensioni.</p><p>Per esempio <code>clamp(1rem, 4vw, 3rem)</code> rimane leggibile anche quando cambia la larghezza dello schermo.</p>"}
    ],
    "quiz": [
      {"q":"Un sito responsive…","opts":["Si adatta a ogni schermo","Funziona solo su desktop","Ha bisogno di un plugin","Ha sempre larghezza fissa"]},
      {"q":"Le media query verificano…","opts":["Una condizione come max-width","La dimensione del file","Il titolo della pagina","La velocità del server"]},
      {"q":"clamp(1rem, 4vw, 3rem) significa…","opts":["Una dimensione fissa","Una dimensione fluida tra 1rem e 3rem","Una dimensione negativa","Un colore"]}
    ]
  },
  "css-p2": {
    "qa": [
      {"q":"Flexbox o Grid: quale devo usare?","a":"<p>Flexbox è un sistema a una dimensione, perfetto per barre, menu e allineamento su una riga o colonna. Grid lavora su due dimensioni, righe e colonne, ed è ideale per layout di pagina e griglie di card.</p><p>In molti progetti si usa Grid per la struttura generale e Flexbox per allineare gli elementi al suo interno.</p>"},
      {"q":"Quali sono le proprietà Flexbox essenziali?","a":"<p>Sul contenitore usa <code>display: flex</code>, <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code>, <code>gap</code> e <code>flex-wrap</code>. Sugli elementi usa <code>flex</code>, <code>flex-grow</code> e <code>align-self</code> quando necessario.</p><p>Conoscere asse principale e asse trasversale rende queste proprietà intuitive.</p>"},
      {"q":"Quali pattern Grid dovrebbe conoscere ogni sviluppatore?","a":"<p>Usa colonne fluide con <code>repeat(auto-fit, minmax(...))</code>, l’unità <code>fr</code> per dividere lo spazio e <code>gap</code> per separare le card. Le aree nominate rendono leggibili layout complessi.</p><p>Grid permette anche di modificare la struttura alle breakpoint senza cambiare il markup HTML.</p>"}
    ],
    "quiz": [
      {"q":"Flexbox dispone gli elementi lungo…","opts":["Un asse","Due assi","Tre assi","Nessun asse"]},
      {"q":"Grid è ideale per…","opts":["Barre degli strumenti","Layout di intere pagine","Singoli pulsanti","Colori del testo"]},
      {"q":"justify-content controlla…","opts":["L’asse trasversale","L’asse principale","Il bordo","Il padding"]}
    ]
  }
};

Object.keys(ITALIAN_COURSE_CONTENT).forEach(function(id){
  var local = ITALIAN_COURSE_CONTENT[id];
  var course = APP_CONFIG.courses.filter(function(item){ return item.id === id; })[0];
  if (!course) return;
  (local.qa || []).forEach(function(entry, i){
    if (!course.qa || !course.qa[i]) return;
    course.qa[i].q.it = entry.q;
    course.qa[i].a.it = entry.a;
  });
  (local.quiz || []).forEach(function(entry, i){
    if (!course.quiz || !course.quiz[i]) return;
    course.quiz[i].q.it = entry.q;
    (entry.opts || []).forEach(function(option, j){
      if (course.quiz[i].opts && course.quiz[i].opts[j]) course.quiz[i].opts[j].it = option;
    });
  });
});

/* ============================================================================
   MODULES
   ============================================================================ */
(function(){
'use strict';
var $  = function(s,c){ return (c||document).querySelector(s); };
var $$ = function(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };
var LANGS = { en:'ltr', fa:'rtl', it:'ltr' };
var state = { lang:'en' };

/* ---------------- 1. LOADING SCREEN (fast — never blocks the page) ---------------- */
function initLoader(){
  var el = $('#loader'), bar = $('#loaderBar'), pct = $('#loaderPct');
  var p = 0, done = false;
  var tick = setInterval(function(){
    p = Math.min(92, p + 8 + Math.random() * 18);
    bar.style.width = p + '%'; pct.textContent = Math.round(p);
  }, 55);

  function finish(){
    if (done) return; done = true;
    clearInterval(tick);
    bar.style.width = '100%'; pct.textContent = '100';
    setTimeout(function(){
      el.classList.add('is-done');
      document.body.style.overflow = '';
    }, 200);
  }
  document.body.style.overflow = 'hidden';
  /* content is ready the moment the DOM is parsed — do not wait for
     fonts, images or CDN scripts. Total screen time: ~0.6s max. */
  setTimeout(finish, 180);
  window.addEventListener('load', function(){ setTimeout(finish, 50); });
  setTimeout(finish, 700);                        // safety net
}

/* ---------------- 2. THEME ---------------- */
function appBasePath(){
  var path = location.pathname || '/';
  path = path.replace(/\/(en|fa|it)\/?(?:index\.html)?$/i,'/');
  path = path.replace(/\/index\.html$/i,'/');
  if (!path.endsWith('/')) path += '/';
  return path;
}
function initTheme(){
  var html = document.documentElement, saved = null;
  var rootLanding = !/\/(en|fa|it)\/?(?:index\.html)?$/i.test(location.pathname);
  try { saved = localStorage.getItem('cwb-theme'); } catch(e){}
  /* The public root always enters in dark mode as requested. Language pages
     preserve an explicit user choice made after entry. */
  if (rootLanding) saved = 'dark';
  if (!saved) saved = 'dark';
  html.setAttribute('data-theme', saved);
  $('#themeBtn').addEventListener('click', function(){
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('cwb-theme', next); } catch(e){}
  });
}

/* ---------------- 3. LANGUAGE ---------------- */
function t(key){
  var d = APP_CONFIG.i18n[state.lang] || APP_CONFIG.i18n.en;
  return d[key] != null ? d[key] : (APP_CONFIG.i18n.en[key] || '');
}
function ensureFaFont(){
  if (document.getElementById('faFont')) return;
  var l = document.createElement('link');
  l.id = 'faFont';
  l.rel = 'stylesheet';
  l.href = 'https://cdn.jsdelivr.net/gh/rastikerdar/iran-nastaliq@v1.0.0/IRANNastaliq.css';
  document.head.appendChild(l);
}

function applyLang(lang, push){
  if (!LANGS[lang]) lang = 'en';
  state.lang = lang;
  if (lang === 'fa') ensureFaFont();
  var html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', LANGS[lang]);
  setDrawerLabels();
  syncCourseVideos(lang);

  // ===== به‌روزرسانی innerHTML برای عناصر دارای data-i18n =====
  $$('[data-i18n]').forEach(function(el){
    var v = t(el.getAttribute('data-i18n'));
    if (v != null) el.innerHTML = v;
  });

  // ===== به‌روزرسانی placeholder برای عناصر دارای data-i18n-placeholder =====
  $$('[data-i18n-placeholder]').forEach(function(el){
    var v = t(el.getAttribute('data-i18n-placeholder'));
    if (v != null) el.setAttribute('placeholder', v);
  });

  // ===== Localize accessible names without changing visible text =====
  $$('[data-i18n-aria-label]').forEach(function(el){
    var v = t(el.getAttribute('data-i18n-aria-label'));
    if (v) el.setAttribute('aria-label', v);
  });

   // ===== به‌روزرسانی وضعیت دکمه‌های زبان =====
  $$('.lang__opt').forEach(function(b){
    b.setAttribute('aria-current', String(b.dataset.lang === lang));
  });

  renderVideos(); renderStats(); renderFaq();      // re-render translated blocks
  renderCourses();                                 // re-render course list in new language
  updateNavSessionTitles();                        // show the translated title beside each session
  initScrollMotion();                              // re-place FAQ (re-rendered) + rebind motion
  updateSeo(findCourse((location.hash || '').replace('#','')));

  // ===== ذخیره در localStorage =====
  try { localStorage.setItem('cwb-lang', lang); } catch(e){}
  
  // ===== Use crawler/share-friendly static language URLs =====
  if (push !== false){
    var nextPath = appBasePath() + lang + '/';
    try { history.replaceState(null, '', nextPath + (location.hash || '')); } catch(e){}
  }
  
  requestAnimationFrame(fitNav);
}
function initLang(){
  var url = new URLSearchParams(location.search).get('lang'), stored = null;
  var pathMatch = location.pathname.match(/\/(en|fa|it)\/?(?:index\.html)?$/i);
  var pathLang = pathMatch ? pathMatch[1].toLowerCase() : null;
  var rootLanding = !pathMatch;
  try { stored = localStorage.getItem('cwb-lang'); } catch(e){}
  /* Root/x-default is always English. Dedicated /fa/ and /it/ entries keep
     their own static language and metadata; a query parameter still wins. */
  applyLang(url || pathLang || (rootLanding ? 'en' : (stored || 'en')), false);

  var wrap = $('#lang'), btn = $('#langBtn');
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    var open = wrap.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
  $$('.lang__opt').forEach(function(b){
    b.addEventListener('click', function(){
      applyLang(b.dataset.lang);
      wrap.classList.remove('is-open');
      btn.setAttribute('aria-expanded','false');
    });
  });
}

/* ---------------- 4. NAV AUTO-FIT (always one line) ---------------- */
var navEl, navList;
function rowWidth(){
  var items = navList.children, total = 0;
  for (var i=0;i<items.length;i++) total += items[i].getBoundingClientRect().width;
  var gap = parseFloat(getComputedStyle(navList).columnGap) || 0;
  return total + gap * Math.max(0, items.length - 1);
}
function fitNav(){
  if (!navEl || !navEl.offsetParent) return;
  navEl.style.setProperty('--nav-fit','1');
  var avail = navEl.clientWidth - 6;
  if (avail <= 0) return;
  var natural = rowWidth();
  if (natural <= avail) return;
  var f = avail / natural;
  navEl.style.setProperty('--nav-fit', Math.max(.62, f).toFixed(3));
  if (rowWidth() > avail){
    f *= avail / rowWidth();
    navEl.style.setProperty('--nav-fit', Math.max(.58, f).toFixed(3));
  }
}
function initNavFit(){
  navEl = $('#nav'); navList = $('.nav__list');
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNav);
  window.addEventListener('resize', fitNav, {passive:true});
  window.addEventListener('load', fitNav);
  setTimeout(fitNav, 300); setTimeout(fitNav, 1200);
}

/* ---------------- 5. DROPDOWNS ---------------- */
function initDropdowns(){
  var item = $('#coursesItem'), link = $('#coursesItem > .nav__link'), menu = $('#coursesMenu');
  if (!item || !link || !menu) return;

  function hasFineHover(){
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  function hasDirectSubmenu(menuItem){
    return Array.prototype.some.call(menuItem.children, function(child){
      return child.classList && child.classList.contains('submenu');
    });
  }
  function getDirectTrigger(menuItem){
    return Array.prototype.find.call(menuItem.children, function(child){
      return child.classList && child.classList.contains('menu__link');
    });
  }

  function closeSubmenus(keep){
    $$('.menu__item.is-open', menu).forEach(function(openItem){
      if (keep && (openItem === keep || openItem.contains(keep))) return;
      openItem.classList.remove('is-open');
      var trigger = getDirectTrigger(openItem);
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }
  function openSubmenu(menuItem){
    if (!menuItem || !hasDirectSubmenu(menuItem)){
      closeSubmenus(menuItem);
      return;
    }
    closeSubmenus(menuItem);
    menuItem.classList.add('is-open');
    var trigger = getDirectTrigger(menuItem);
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
  }
  function closeCourseMenu(){
    closeSubmenus(null);
    item.classList.remove('is-open');
    item.classList.add('is-closed');
    link.setAttribute('aria-expanded', 'false');
    $('#lang').classList.remove('is-open');
    $('#langBtn').setAttribute('aria-expanded','false');
  }

  /* Desktop/laptop: pointer movement and keyboard focus disclose the menu;
     a mouse click never toggles it. Coarse pointers can still tap to toggle
     if the desktop header is ever shown on a touch-capable large screen. */
  link.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    if (hasFineHover() || e.detail === 0){
      item.classList.remove('is-closed');
      link.setAttribute('aria-expanded','true');
      if (hasFineHover() && e.detail > 0 && link.blur) link.blur();
      return;
    }
    var open = item.classList.toggle('is-open');
    item.classList.toggle('is-closed', !open);
    link.setAttribute('aria-expanded', String(open));
    if (!open) closeSubmenus(null);
  });

  /* 2. Clicking inside menu:
     - If clicking topic or category with a submenu (Free courses, Premium courses, HTML, CSS, JavaScript):
       toggle submenu and do NOT navigate!
     - If clicking a leaf session link or components, navigate and close menu */
  menu.addEventListener('click', function(e){
    var clickedLink = e.target.closest('.menu__link');
    if (!clickedLink) return;
    var menuItem = clickedLink.parentElement;
    if (menuItem && hasDirectSubmenu(menuItem)){
      e.preventDefault();
      e.stopPropagation();
      /* Fine-pointer mouse clicks do not control fly-outs; hover already
         opened the branch. Keyboard focus also opens it without requiring
         Enter. Touch/coarse pointers retain a familiar tap-to-toggle path. */
      if (hasFineHover() || e.detail === 0){
        if (hasFineHover() && e.detail > 0 && clickedLink.blur) clickedLink.blur();
        return;
      }
      var willOpen = !menuItem.classList.contains('is-open');
      if (willOpen){
        openSubmenu(menuItem);
      } else {
        menuItem.classList.remove('is-open');
        clickedLink.setAttribute('aria-expanded', 'false');
      }
      return;
    }
    var sess = clickedLink.getAttribute('data-session');
    var tab = clickedLink.getAttribute('data-tab');
    if (sess){
      e.preventDefault();
      goToSession(sess);
      closeCourseMenu();
    } else if (tab){
      e.preventDefault();
      goToCoursesTab(tab);
      closeCourseMenu();
    } else {
      closeCourseMenu();
    }
  });

  menu.addEventListener('pointerover', function(e){
    if (window.matchMedia('(hover: none)').matches) return;
    var target = e.target.closest && e.target.closest('.menu__link');
    if (!target || !menu.contains(target)) return;
    /* A prior mouse click must not leave :focus-within holding an old branch
       open while the pointer moves to CSS/JavaScript. Keyboard focus is left
       untouched because this handler only runs for real hover movement. */
    var active = document.activeElement;
    if (active && active !== target && menu.contains(active) && active.blur) active.blur();
    var mi = target.parentElement;
    if (mi && hasDirectSubmenu(mi)){
      openSubmenu(mi);
    }
  });
  menu.addEventListener('focusin', function(e){
    var target = e.target.closest && e.target.closest('.menu__link');
    if (target && menu.contains(target)){
      var mi = target.parentElement;
      if (mi && hasDirectSubmenu(mi)) openSubmenu(mi);
    }
  });
  menu.addEventListener('mouseleave', function(){
    if (window.matchMedia('(hover: none)').matches) return;
    closeSubmenus(null);
  });

  item.addEventListener('pointerenter', function(){
    if (window.matchMedia('(hover: none)').matches) return;
    item.classList.remove('is-closed');
    item.classList.add('is-open');
    link.setAttribute('aria-expanded', 'true');
  });
  link.addEventListener('focus', function(){
    item.classList.remove('is-closed');
    link.setAttribute('aria-expanded','true');
  });
  item.addEventListener('focusout', function(){
    requestAnimationFrame(function(){
      if (!item.contains(document.activeElement) && !item.matches(':hover')) closeCourseMenu();
    });
  });
  item.addEventListener('mouseleave', function(){
    if (window.matchMedia('(hover: none)').matches || item.contains(document.activeElement)) return;
    closeSubmenus(null);
    item.classList.remove('is-open');
    link.setAttribute('aria-expanded', 'false');
  });

  $$('.nav__link').forEach(function(navLink){
    if (navLink === link) return;
    navLink.addEventListener('pointerenter', closeCourseMenu);
    navLink.addEventListener('click', closeCourseMenu);
  });

  document.addEventListener('click', function(e){
    if (!e.target.closest('#coursesItem') && !e.target.closest('#lang')) closeCourseMenu();
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){ closeCourseMenu(); closeDrawer(); }
  });
}

/* ---------------- 6. MOBILE DRAWER ---------------- */
var burger, drawer, scrim, drawerCloseBtn;
var drawerLastFocus = null, drawerPreviousOverflow = '';
var DRAWER_COPY = {
  en: { open:'Open menu', close:'Close menu', nav:'Mobile navigation' },
  fa: { open:'باز کردن منو', close:'بستن منو', nav:'پیمایش موبایل' },
  it: { open:'Apri menu', close:'Chiudi menu', nav:'Navigazione mobile' }
};
function drawerCopy(){ return DRAWER_COPY[state.lang] || DRAWER_COPY.en; }
function setDrawerLabels(){
  var copy = drawerCopy();
  if (burger){
    burger.setAttribute('aria-label',
      burger.getAttribute('aria-expanded') === 'true' ? copy.close : copy.open);
  }
  if (drawer) drawer.setAttribute('aria-label', copy.nav);
  if (drawerCloseBtn) drawerCloseBtn.setAttribute('aria-label', copy.close);
}
function drawerFocusable(){
  if (!drawer) return [];
  return $$('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])', drawer)
    .filter(function(el){ return !el.hasAttribute('inert') && el.getClientRects().length > 0; });
}
function openDrawer(){
  if (!drawer) drawer = $('#drawer');
  if (!scrim) scrim = $('#scrim');
  if (!burger) burger = $('#burger');
  if (!drawer || !scrim || !burger || drawer.classList.contains('is-open')) return;

  drawerLastFocus = document.activeElement;
  drawerPreviousOverflow = document.body.style.overflow;
  drawer.removeAttribute('inert');
  drawer.setAttribute('aria-hidden','false');
  scrim.setAttribute('aria-hidden','false');
  drawer.classList.add('is-open');
  scrim.classList.add('is-open');
  document.body.classList.add('nav-open');
  burger.setAttribute('aria-expanded','true');
  setDrawerLabels();
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(function(){
    var first = drawerCloseBtn || drawerFocusable()[0] || drawer;
    if (first && first.focus) first.focus({preventScroll:true});
  });
}
function closeDrawer(restoreFocus){
  if (!drawer) drawer = $('#drawer');
  if (!scrim) scrim = $('#scrim');
  if (!burger) burger = $('#burger');
  if (!drawer) return;
  var wasOpen = drawer.classList.contains('is-open');
  if (!wasOpen){
    if (burger) burger.setAttribute('aria-expanded','false');
    setDrawerLabels();
    return;
  }

  /* Move focus out before applying inert/aria-hidden; otherwise Chromium
     correctly rejects hiding an element that still owns keyboard focus. */
  if (wasOpen && drawer.contains(document.activeElement)){
    var target = drawerLastFocus && document.contains(drawerLastFocus) ? drawerLastFocus : burger;
    if (restoreFocus !== false && target && target.focus){
      target.focus({preventScroll:true});
    } else if (document.activeElement && document.activeElement.blur){
      document.activeElement.blur();
    }
  }

  drawer.classList.remove('is-open');
  if (scrim) scrim.classList.remove('is-open');
  drawer.setAttribute('aria-hidden','true');
  drawer.setAttribute('inert','');
  if (scrim) scrim.setAttribute('aria-hidden','true');
  document.body.classList.remove('nav-open');
  if (burger) burger.setAttribute('aria-expanded','false');
  setDrawerLabels();
  document.body.style.overflow = drawerPreviousOverflow;
}
function initDrawer(){
  burger = $('#burger'); drawer = $('#drawer'); scrim = $('#scrim');
  drawerCloseBtn = $('#drawerClose');
  if (!burger || !drawer || !scrim) return;

  /* Start truly non-interactive. This prevents off-canvas Persian links from
     receiving keyboard focus before the menu has opened. */
  drawer.setAttribute('inert','');
  drawer.setAttribute('aria-hidden','true');
  scrim.setAttribute('aria-hidden','true');
  setDrawerLabels();

  burger.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
  });
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', function(){ closeDrawer(); });
  scrim.addEventListener('click', function(){ closeDrawer(); });

  /* Modal keyboard behavior: Escape closes; Tab stays within the drawer. */
  drawer.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
      return;
    }
    if (e.key !== 'Tab') return;
    var focusable = drawerFocusable();
    if (!focusable.length){ e.preventDefault(); drawer.focus(); return; }
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first){
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last){
      e.preventDefault(); first.focus();
    }
  });

  /* Leaf links navigate and close drawer */
  $$('#drawer a.drawer__link[href]:not([type="button"]), #drawer a.drawer__sublink[href]').forEach(function(a){
    a.addEventListener('click', function(e){
      var sess = a.getAttribute('data-session');
      var tab = a.getAttribute('data-tab');
      if (sess){
        e.preventDefault();
        goToSession(sess);
      } else if (tab){
        e.preventDefault();
        goToCoursesTab(tab);
      }
      closeDrawer(false);
    });
  });

  /* Course topics and categories accordion togglers */
  $$('#drawer .drawer__toggler').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      var willOpen = !isExpanded;
      if (willOpen){
        var ownerItem = btn.parentElement;
        var siblingList = ownerItem && ownerItem.parentElement;
        if (siblingList){
          Array.prototype.forEach.call(siblingList.children, function(sibling){
            if (sibling === ownerItem || !sibling.querySelectorAll) return;
            sibling.querySelectorAll('.drawer__toggler[aria-expanded="true"]').forEach(function(other){
              other.setAttribute('aria-expanded','false');
            });
          });
        }
      }
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });

  /* A tablet rotated into desktop layout must never retain a hidden scroll lock. */
  window.addEventListener('resize', function(){
    if (window.innerWidth > 1024 && drawer.classList.contains('is-open')) closeDrawer(false);
  }, {passive:true});
}

/* ---------------- 7. RENDERERS (from APP_CONFIG) ---------------- */
function renderStats(){
  var host = $('#ytStats'); if (!host) return;
  host.innerHTML = APP_CONFIG.ytStats.map(function(s){
    return '<div class="yt__stat"><div class="yt__num">' + s.num + '</div>' +
           '<div class="yt__label">' + t(s.key) + '</div></div>';
  }).join('');
}
function youtubeVideoId(url){
  var match = String(url || '').match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
  return match ? match[1] : '';
}
function renderVideos(){
  var host = $('#ytGrid'); if (!host) return;
  host.innerHTML = APP_CONFIG.videos.map(function(v){
    var image = v.thumbFile ? '<img class="yt__image" src="' + appBasePath() + 'img/' + v.thumbFile + '" width="480" height="360" loading="lazy" decoding="async" fetchpriority="low" alt="" onerror="this.remove()">' : '';
    var title = v.title[state.lang] || v.title.en;
    return '<a class="yt__card reveal" href="' + v.url + '" target="_blank" rel="noopener" aria-label="' + title.replace(/&/g, '&amp;').replace(/"/g, '&quot;') + ' — YouTube">' +
      '<div class="yt__thumb yt__thumb--' + v.thumb + '">' + image +
        '<span class="yt__play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>' +
        '<span class="yt__dur">' + v.dur + '</span>' +
      '</div>' +
      '<div class="yt__body"><h3 class="yt__title">' + title + '</h3>' +
      '<p class="yt__meta">' + (v.meta[state.lang] || v.meta.en) + '</p></div></a>';
  }).join('');
}
/* The YouTube course playlist is created only for Persian. It is removed
   from the DOM — not merely hidden — whenever the language is EN or IT. */
function courseVideosMarkup(){
  return '<section class="course-videos reveal" id="courseVideos" aria-labelledby="courseVideosTitle">' +
    '<header class="course-videos__head">' +
      '<span class="course-videos__eyebrow" data-i18n="course_videos_eyebrow">جلسات یوتیوب</span>' +
      '<h3 class="course-videos__title" id="courseVideosTitle" data-i18n="course_videos_title">با <em>جلسات ویدیویی</em> شروع کنید</h3>' +
      '<p class="course-videos__lead" data-i18n="course_videos_lead">چهار جلسهٔ رایگان به ترتیب یادگیری؛ هر جلسه را در یوتیوب باز کنید.</p>' +
    '</header>' +
    '<div class="yt__grid course-videos__grid" id="ytGrid"></div>' +
  '</section>';
}
function syncCourseVideos(lang){
  var mount = $('#courseVideoMount');
  if (!mount) return;
  if (lang !== 'fa'){
    mount.textContent = '';
    return;
  }
  if (!$('#courseVideos')) mount.innerHTML = courseVideosMarkup();
}

function renderFaq(){
  var host = $('#faqList'); if (!host) return;
  host.innerHTML = APP_CONFIG.faq.map(function(f, i){
    return '<article class="faq__item">' +
      '<button class="faq__q" type="button" aria-expanded="false" aria-controls="faqA' + i + '">' +
        '<span>' + (f.q[state.lang] || f.q.en) + '</span>' +
        '<svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>' +
      '</button>' +
      '<div class="faq__a" id="faqA' + i + '"><div><p>' + (f.a[state.lang] || f.a.en) + '</p></div></div>' +
    '</article>';
  }).join('');
  $$('.faq__q', host).forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.closest('.faq__item');
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
}

/* ---------------- 8. CONTACT FORM ---------------- */
function initForm(){
  var form = $('#contactForm'), status = $('#formStatus');
  if (!form) return;

  function setErr(id, msg){
    var f = $('#' + id), s = $('[data-err-for="' + id + '"]');
    if (s) s.textContent = msg || '';
    if (f) f.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }
  function validate(){
    var ok = true;
    ok = setErr('cName',  $('#cName').value.trim() ? '' : t('err_name'))  && ok;
    ok = setErr('cEmail', /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($('#cEmail').value.trim()) ? '' : t('err_email')) && ok;
    ok = setErr('cMsg',   $('#cMsg').value.trim().length > 4 ? '' : t('err_msg')) && ok;
    return ok;
  }
  ['cName','cEmail','cMsg'].forEach(function(id){
    var el = $('#' + id);
    el.addEventListener('blur', validate);
    el.addEventListener('input', function(){
      if (el.getAttribute('aria-invalid') === 'true') validate();
    });
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (!validate()){ status.textContent = ''; return; }

    var data = new FormData(form);
    data.append('_replyto', $('#cEmail').value.trim());
    data.append('_language', state.lang.toUpperCase());

    status.textContent = t('sending');
    status.className = 'form__status';
    data.append('_subject', 'New message — Code with Bahareh');
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    data.append('_url', location.href);

    fetch(APP_CONFIG.formEndpoint + APP_CONFIG.email, {
      method:'POST', headers:{ 'Accept':'application/json' }, body:data
    }).then(function(r){
      if (!r.ok) throw new Error('bad');
      status.textContent = t('sent');
      status.className = 'form__status form__status--ok';
      form.reset();
    }).catch(function(){
      status.textContent = t('send_fail');
      status.className = 'form__status form__status--err';
    });
  });
}

/* ---------------- 8c. CUSTOM CURSOR (desktop only) ---------------- */
function initCursor(){
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var dot = document.getElementById('curDot'),
      ring = document.getElementById('curRing');
  if (!dot || !ring) return;

  var mx = window.innerWidth / 2, my = window.innerHeight / 2;   // pointer
  var rx = mx, ry = my;                                          // ring (lags)
  var live = false, raf = 0;

  function loop(){
    // ring eases toward the pointer -> soft trailing feel
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    dot.style.transform  = 'translate3d(' + mx + 'px,' + my + 'px,0)';
    ring.style.transform = 'translate3d(' + rx.toFixed(2) + 'px,' + ry.toFixed(2) + 'px,0)';
    /* Stop once the ring catches up. The former endless animation frame
       loop ran for the entire visit and was unnecessarily expensive. */
    if (Math.abs(mx - rx) > .2 || Math.abs(my - ry) > .2){
      raf = requestAnimationFrame(loop);
    } else {
      raf = 0;
    }
  }

  window.addEventListener('pointermove', function(e){
    if (e.pointerType === 'touch') return;
    mx = e.clientX; my = e.clientY;
    if (!live){
      live = true;
      dot.classList.add('is-live'); ring.classList.add('is-live');
    }
    if (!raf) raf = requestAnimationFrame(loop);
  }, {passive:true});

  // grow the ring over anything interactive
  var HOT = 'a,button,input,select,textarea,summary,[role="button"],.faq__q,.lang__opt';

  /* each social network tints the cursor with its own brand colour */
  var BRAND = {
    'brand-whatsapp' :'#25D366',
    'brand-telegram' :'#229ED9',
    'brand-youtube'  :'#FF0000',
    'brand-instagram':'#DD2A7B',
    'brand-github'   :'#8b949e',
    'brand-email'    :'#EA4335'
  };
  function brandOf(el){
    if (!el || !el.classList) return null;
    for (var k in BRAND){ if (el.classList.contains(k)) return BRAND[k]; }
    return null;
  }

  document.addEventListener('pointerover', function(e){
    if (!e.target.closest) return;
    if (e.target.closest(HOT)) ring.classList.add('is-hot');

    var host = e.target.closest('.icon-btn,.contact__ico,.contact__row');
    var col  = null;
    if (host){
      col = brandOf(host) || brandOf(host.querySelector && host.querySelector('.contact__ico'));
    }
    if (col){
      document.documentElement.style.setProperty('--cur-brand', col);
      ring.classList.add('is-brand'); dot.classList.add('is-brand');
    }
  }, {passive:true});

  document.addEventListener('pointerout', function(e){
    if (!e.target.closest) return;
    if (e.target.closest(HOT)) ring.classList.remove('is-hot');
    if (e.target.closest('.icon-btn,.contact__ico,.contact__row')){
      ring.classList.remove('is-brand'); dot.classList.remove('is-brand');
    }
  }, {passive:true});

  // press feedback
  document.addEventListener('pointerdown', function(){ ring.style.scale = '.82'; }, {passive:true});
  document.addEventListener('pointerup',   function(){ ring.style.scale = '1';   }, {passive:true});

  // hide when the pointer leaves the window
  document.addEventListener('mouseleave', function(){
    dot.classList.remove('is-live'); ring.classList.remove('is-live');
  });
  document.addEventListener('mouseenter', function(){
    if (live){ dot.classList.add('is-live'); ring.classList.add('is-live'); }
  });
}

/* ---------------- 8a. CURSOR BACKGROUND GLOW ---------------- */
function initCursorGlow(){
  var root = document.documentElement;
  if (window.matchMedia('(pointer: coarse)').matches) return;   // no pointer to follow

  var tx = innerWidth * .5,  ty = innerHeight * .35;   // target
  var cx = tx, cy = ty;                                 // fast core
  var ax = tx, ay = ty;                                 // slow aurora (trails)
  var running = false;

  function loop(){
    cx += (tx - cx) * 0.16;      // core catches up quickly
    cy += (ty - cy) * 0.16;
    ax += (tx - ax) * 0.085;     // aurora drifts behind -> layered parallax
    ay += (ty - ay) * 0.085;

    root.style.setProperty('--gx',  cx.toFixed(1) + 'px');
    root.style.setProperty('--gy',  cy.toFixed(1) + 'px');
    root.style.setProperty('--gx2', ax.toFixed(1) + 'px');
    root.style.setProperty('--gy2', ay.toFixed(1) + 'px');

    // keep going until BOTH the core and the slow aurora have arrived,
    // otherwise the aurora freezes wherever it happened to be
    var settled = Math.abs(tx-cx) < .3 && Math.abs(ty-cy) < .3 &&
                  Math.abs(tx-ax) < .3 && Math.abs(ty-ay) < .3;
    if (settled){ running = false; } else { requestAnimationFrame(loop); }
  }

  window.addEventListener('pointermove', function(e){
    if (e.pointerType === 'touch') return;
    tx = e.clientX; ty = e.clientY;
    if (!running){ running = true; requestAnimationFrame(loop); }
  }, {passive:true});
}

/* -------- 8a-2. BODY BACKGROUND GLOW THAT TRACKS THE MOUSE --------
   Writes --mouse-x / --mouse-y (as percentages) onto <html>; the body's
   radial-gradient reads them. Updates are coalesced into one rAF frame so
   a fast mouse can never queue more than a single style write per paint. */
function initMouseBgGlow(){
  var root = document.documentElement;
  if (window.matchMedia('(pointer: coarse)').matches) return;  // no pointer
  var px = 50, py = 50, queued = false;

  function paint(){
    queued = false;
    root.style.setProperty('--mouse-x', px.toFixed(2) + '%');
    root.style.setProperty('--mouse-y', py.toFixed(2) + '%');
  }
  document.addEventListener('mousemove', function(e){
    px = (e.clientX / window.innerWidth)  * 100;
    py = (e.clientY / window.innerHeight) * 100;
    if (!queued){ queued = true; requestAnimationFrame(paint); }
  }, {passive:true});
}

/* ---------------- 8b. BUTTON PRESS RIPPLE ---------------- */
function initRipple(){
  document.addEventListener('pointerdown', function(e){
    var btn = e.target.closest('.btn');
    if (!btn) return;
    var r = btn.getBoundingClientRect();
    btn.style.setProperty('--rx', (e.clientX - r.left) + 'px');
    btn.style.setProperty('--ry', (e.clientY - r.top) + 'px');
    btn.classList.remove('is-pressed');
    void btn.offsetWidth;                    // restart the animation
    btn.classList.add('is-pressed');
    setTimeout(function(){ btn.classList.remove('is-pressed'); }, 600);
  }, {passive:true});
}

/* ---------------- 8d. CINEMATIC SMOOTH SCROLL ----------------
   A small requestAnimationFrame scroller gives every internal movement the
   same eased pace (navigation, sessions, course tabs and Back to Top).
   Native user input cancels it immediately, and reduced-motion preferences
   are always respected. */
var smoothScrollFrame = 0;
var smoothScrollRestore = '';
var smoothScrollCancelBound = false;

function cancelSmoothScroll(){
  if (smoothScrollFrame){
    cancelAnimationFrame(smoothScrollFrame);
    smoothScrollFrame = 0;
  }
  if (smoothScrollRestore !== null){
    document.documentElement.style.scrollBehavior = smoothScrollRestore;
    smoothScrollRestore = null;
  }
}

function bindSmoothScrollCancel(){
  if (smoothScrollCancelBound) return;
  smoothScrollCancelBound = true;
  ['wheel','touchstart','pointerdown'].forEach(function(type){
    window.addEventListener(type, function(){
      if (smoothScrollFrame) cancelSmoothScroll();
    }, {passive:true});
  });
  window.addEventListener('keydown', function(e){
    if (!smoothScrollFrame) return;
    if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].indexOf(e.key) > -1){
      cancelSmoothScroll();
    }
  });
}

function smoothScrollToY(targetY, options){
  options = options || {};
  cancelSmoothScroll();
  bindSmoothScrollCancel();

  var root = document.documentElement;
  var maxY = Math.max(0, root.scrollHeight - window.innerHeight);
  var endY = Math.max(0, Math.min(Number(targetY) || 0, maxY));
  var startY = window.pageYOffset || window.scrollY || root.scrollTop || 0;
  var distance = endY - startY;
  var done = typeof options.done === 'function' ? options.done : function(){};

  if (Math.abs(distance) < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    window.scrollTo(0, endY);
    done();
    return;
  }

  /* Disable CSS smooth scrolling during the rAF animation; otherwise each
     frame starts another native animation and produces a delayed tail. */
  smoothScrollRestore = root.style.scrollBehavior || '';
  root.style.scrollBehavior = 'auto';
  /* Deliberately unhurried: short section changes take about one second,
     while long Back-to-Top journeys ease over as much as three seconds. */
  var duration = options.duration || Math.min(3000, Math.max(850,
    650 + Math.pow(Math.abs(distance), .55) * 12));
  var started = performance.now();

  function frame(now){
    var t = Math.min(1, (now - started) / duration);
    /* quintic smootherstep: zero velocity and acceleration at both ends */
    var eased = t * t * t * (t * (t * 6 - 15) + 10);
    window.scrollTo(0, startY + distance * eased);
    if (t < 1){
      smoothScrollFrame = requestAnimationFrame(frame);
    } else {
      smoothScrollFrame = 0;
      window.scrollTo(0, endY);
      root.style.scrollBehavior = smoothScrollRestore || '';
      smoothScrollRestore = null;
      done();
    }
  }
  smoothScrollFrame = requestAnimationFrame(frame);
}

function smoothScrollToDynamic(getTargetY, options){
  options = options || {};
  cancelSmoothScroll();
  bindSmoothScrollCancel();
  var root = document.documentElement;
  var startY = window.pageYOffset || window.scrollY || root.scrollTop || 0;
  function clampedTarget(){
    var maxY = Math.max(0,root.scrollHeight - window.innerHeight);
    return Math.max(0,Math.min(Number(getTargetY()) || 0,maxY));
  }
  var initialTarget = clampedTarget();
  var distance = initialTarget - startY;
  var done = typeof options.done === 'function' ? options.done : function(){};
  if (Math.abs(distance) < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    window.scrollTo(0,initialTarget); done(); return;
  }
  smoothScrollRestore = root.style.scrollBehavior || '';
  root.style.scrollBehavior = 'auto';
  var duration = options.duration || Math.min(3000,Math.max(850,650 + Math.pow(Math.abs(distance),.55) * 12));
  var started = performance.now();
  function frame(now){
    var t = Math.min(1,(now - started) / duration);
    var eased = t * t * t * (t * (t * 6 - 15) + 10);
    var liveTarget = clampedTarget();
    window.scrollTo(0,startY + (liveTarget - startY) * eased);
    if (t < 1){
      smoothScrollFrame = requestAnimationFrame(frame);
    } else {
      smoothScrollFrame = 0;
      window.scrollTo(0,clampedTarget());
      root.style.scrollBehavior = smoothScrollRestore || '';
      smoothScrollRestore = null;
      done();
    }
  }
  smoothScrollFrame = requestAnimationFrame(frame);
}

function smoothScrollToElement(el, options){
  if (!el) return;
  options = options || {};
  var header = document.getElementById('header');
  var gap = options.gap == null ? 14 : options.gap;
  var userDone = typeof options.done === 'function' ? options.done : function(){};
  var courseSection = document.getElementById('courses');
  var followsCourses = !!(courseSection && courseSection !== el &&
    (courseSection.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING));

  /* Contact/FAQ targets live after a lazily rendered course section. Build
     that section before measuring, then suspend preview hydration so the
     destination cannot move during the scroll. */
  if (followsCourses && !coursesHydrated) ensureCoursesRendered();
  if (followsCourses) pauseCodeOutputsForNavigation();

  function targetTop(){
    var headerH = header ? header.getBoundingClientRect().height : 0;
    var currentY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
    return el.id === 'home' ? 0 : Math.max(0,el.getBoundingClientRect().top + currentY - headerH - gap);
  }
  function finish(pass){
    if (!followsCourses){ userDone(); return; }
    setTimeout(function(){
      var currentY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
      var corrected = targetTop();
      if (pass < 2 && Math.abs(corrected - currentY) > 3){
        smoothScrollToY(corrected,{duration:260,done:function(){ finish(pass + 1); }});
      } else {
        resumeCodeOutputsAfterNavigation();
        userDone();
      }
    },60);
  }
  if (followsCourses){
    smoothScrollToDynamic(targetTop,{duration:options.duration,done:function(){ finish(0); }});
  } else {
    smoothScrollToY(targetTop(),{duration:options.duration,done:function(){ finish(0); }});
  }
}

function initSmoothAnchors(){
  document.addEventListener('click', function(e){
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains('u-sr') || a.hasAttribute('data-session') || a.hasAttribute('data-tab')) return;
    var raw = a.getAttribute('href');
    if (!raw || raw === '#') return;
    var target = document.getElementById(decodeURIComponent(raw.slice(1)));
    if (!target) return;
    e.preventDefault();
    try { history.pushState(null, '', raw); } catch(err){}
    smoothScrollToElement(target, {gap:16,duration:target.id === 'contact' ? 1800 : undefined});
  });
}

/* ---------------- 9. SCROLL : header, spy, back-to-top ---------------- */
function initScroll(){
  var header = $('#header'), toTop = $('#toTop'), dial = $('#toTopDial');
  var links = $$('.nav__link[href^="#"], .drawer__link[href^="#"]');
  var secs  = $$('main section[id], main .contact-anchor[id]');

  var footer = document.querySelector('.footer');
  var progFill = document.getElementById('progressFill');
  var pctEl = document.getElementById('toTopPct');

  function onScroll(){
    var y = window.scrollY || 0,
        max = document.documentElement.scrollHeight - window.innerHeight,
        pct = max > 0 ? (y / max) * 100 : 0;
    header.classList.toggle('is-stuck', y > 10);
    toTop.classList.toggle('is-shown', y > 420);
    dial.style.setProperty('--p', pct.toFixed(1));

    /* top-of-page progress bar */
    if (progFill){
      progFill.style.width = pct.toFixed(2) + '%';
    }
    if (pctEl) pctEl.textContent = Math.round(pct) + '%';

    /* dock above the footer instead of floating over it */
    if (footer){
      var fRect = footer.getBoundingClientRect();
      var overlap = window.innerHeight - fRect.top;
      if (overlap > 0){
        toTop.classList.add('is-docked');
        toTop.style.setProperty('--dock', Math.round(overlap) + 'px');
      } else {
        toTop.classList.remove('is-docked');
      }
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
  toTop.addEventListener('click', function(){ smoothScrollToY(0); });

  if ('IntersectionObserver' in window){
    var spy = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (!en.isIntersecting) return;
        links.forEach(function(a){
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin:'-45% 0px -50% 0px' });
    secs.forEach(function(s){ spy.observe(s); });
  }
}

/* ---------------- 10. OPTIONAL MOTION ENHANCEMENT ----------------
   GSAP is not part of the critical path. It is requested only after the
   first real user interaction, preserving the static accessible experience
   and keeping initial network/main-thread work small. */
var motionLibrariesRequested = false;
function loadExternalScript(src){
  return new Promise(function(resolve, reject){
    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
function requestMotionLibraries(){
  if (motionLibrariesRequested || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  motionLibrariesRequested = true;
  loadExternalScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js')
    .then(function(){ return loadExternalScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'); })
    .then(initGSAP)
    .catch(function(){ $$('.reveal').forEach(function(el){ el.style.opacity = 1; }); });
}
function initDeferredMotion(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  /* Do not initialize animation libraries during ordinary scrolling; this
     avoids a network/compile spike in the middle of a touch or wheel move. */
  var events = ['click','keydown'];
  function start(){
    events.forEach(function(type){ window.removeEventListener(type,start); });
    /* Let navigation/scroll feedback finish before optional animation code
       downloads and compiles. */
    setTimeout(function(){
      if (window.requestIdleCallback) requestIdleCallback(requestMotionLibraries,{timeout:1200});
      else requestMotionLibraries();
    },4200);
  }
  events.forEach(function(type){ window.addEventListener(type,start,{passive:true}); });
}

/* ---------------- 10a. GSAP ANIMATIONS ---------------- */
function initGSAP(){
  if (typeof window.gsap === 'undefined'){          // graceful fallback
    $$('.reveal').forEach(function(el){ el.style.opacity = 1; });
    return;
  }
  var gsap = window.gsap;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    gsap.set('.reveal', {opacity:1}); return;
  }

  /* hero intro timeline */
  var tl = gsap.timeline({ delay:.15, defaults:{ ease:'power3.out' } });
  tl.from('#heroBadge',      { y:-16, opacity:0, duration:.7 })
    .from('.hero__code',     { y:22,  opacity:0, duration:.7 }, '-=.35')
    .from('.hero__name',     { y:30,  opacity:0, scale:.96, duration:.9 }, '-=.45')
    .from('.hero__sub',      { y:16,  opacity:0, duration:.6 }, '-=.5')
    .from('.hero__slogan',   { y:14,  opacity:0, duration:.6 }, '-=.42')
    .from('.hero__cta .btn', { y:20,  opacity:0, duration:.55, stagger:.09,
                               clearProps:'transform' }, '-=.35')
    .from('.hero__scroll',   { opacity:0, duration:.5 }, '-=.2');
  /* belt-and-braces: make sure nothing inline is left on the CTAs */
  tl.eventCallback('onComplete', function(){
    $$('.hero__cta .btn').forEach(function(el){ el.style.transform = ''; });
  });

  /* section reveals */
  if (window.ScrollTrigger){
    /* generic reveals — fade + rise + a touch of scale.
       Anything inside #faq / #contact is skipped: FAQ items and the form
       fields get their own CSS-driven side motion (module 10b), the
       contact panels stay static, and running both would fight over the
       same transform. */
    $$('.reveal').forEach(function(el){
      if (el.closest('#faq') || el.closest('#contact')) return;
      gsap.fromTo(el, { y:38, opacity:0, scale:.985 }, {
        y:0, opacity:1, scale:1, duration:.9, ease:'power3.out',
        scrollTrigger:{ trigger:el, start:'top 86%', once:true },
        clearProps:'transform'
      });
    });

    /* section headings: eyebrow, title and lead cascade in
       (#faq / #contact heads are excluded — those two sections have no
       entrance animation and simply render statically.) */
    $$('.section__head').forEach(function(head){
      if (head.closest('#faq') || head.closest('#contact')) return;
      var bits = head.querySelectorAll('.section__eyebrow,.section__title,.section__lead');
      if (!bits.length) return;
      gsap.fromTo(bits, { y:26, opacity:0 }, {
        y:0, opacity:1, duration:.75, ease:'power3.out', stagger:.11,
        scrollTrigger:{ trigger:head, start:'top 88%', once:true },
        clearProps:'transform'
      });
    });

    /* card grids stagger in one after another */
    /* NOTE: '.faq' and the contact form are deliberately NOT in this list —
       they use the CSS-driven side motion from module 10b. */
    [['.yt__grid','.yt__card'],['.about__values','.about__value'],
     ['.footer__grid','.footer__grid > *']
    ].forEach(function(pair){
      var host = $(pair[0]); if (!host) return;
      var kids = host.querySelectorAll(pair[1]); if (!kids.length) return;
      gsap.fromTo(kids, { y:34, opacity:0 }, {
        y:0, opacity:1, duration:.7, ease:'power2.out', stagger:.09,
        scrollTrigger:{ trigger:host, start:'top 85%', once:true },
        clearProps:'transform'
      });
    });

    /* YouTube stat numbers count up as they appear */
    $$('.yt__num').forEach(function(el){
      var raw = el.textContent.trim();
      var num = parseFloat(raw.replace(/[^\d.]/g,''));
      if (!num) return;
      var suffix = raw.replace(/^[\d.,]+/,'');
      var o = { v:0 };
      gsap.to(o, {
        v:num, duration:1.5, ease:'power2.out',
        scrollTrigger:{ trigger:el, start:'top 92%', once:true },
        onUpdate:function(){
          el.textContent = (num % 1 ? o.v.toFixed(1) : Math.round(o.v)) + suffix;
        }
      });
    });
    /* about portrait parallax */
    var portrait = $('#aboutPortrait');
    if (portrait){
      gsap.to(portrait, {
        yPercent:-9, ease:'none',
        scrollTrigger:{ trigger:'#about', start:'top bottom', end:'bottom top', scrub:.8 }
      });
    }

    /* FAQ, footer social icons and form fields use the lightweight
       CSS-driven side motion from module 10b — no GSAP involvement. */
  } else {
    $$('.reveal').forEach(function(el){ el.style.opacity = 1; });
  }
}

/* -------- 10b. SCROLL-DRIVEN SIDE MOTION : FAQ · SOCIAL · FORM --------
   Lightweight direction-aware scroll motion (no GSAP dependency) for
   three element groups:
     · #faq .faq__item             — questions & answers
     · .footer__social .icon-btn   — footer social media links
     · #contact .form__field       — contact form input fields
   Per element:
     · intersecting the viewport → settled & visible — an on-screen item
       can NEVER be hidden (so language switches can't lose content);
     · fully below the viewport   → prepared at the ENTRY side while
       scrolling down, at the EXIT side while scrolling up;
     · fully above (scrolled past)→ stays visible ("stays in place").
   Direction mapping (all three languages):
     · LTR (EN/IT): entry = LEFT · social/FAQ exit = RIGHT · form exit = LEFT
     · RTL (FA):    entry = RIGHT (mirrored) · exit = LEFT
   Only transform + opacity animate via CSS transitions (GPU-friendly);
   the scroll handler is rAF-throttled and passive, so page load is never
   slowed. Gentle progressive delays (per-group nth-child) make the motion
   smooth and professional. The hidden states only apply under
   `html.motion-on` (set by initScrollMotion), so if JS motion ever fails
   for any reason the content simply stays VISIBLE — it can never be stuck
   invisible. An IntersectionObserver forces any element that enters the
   viewport to settle visibly, no matter how the scroll happened (wheel,
   keyboard, scrollbar, anchor, touch).                                  */
var scrollMotion = {
  dir: 'down', lastY: 0, ticking: false, bound: false, io: null, timer: 0,
  groups: [
    { sel: '#faq .faq__item',           exit: function(){ return 'is-out-right'; } },
    { sel: '.footer__social .icon-btn', exit: function(){ return 'is-out-right'; } },
    { sel: '#contact .form__field',     exit: function(rtl){ return rtl ? 'is-out-right' : 'is-out-left'; } },
    { sel: '#contact .contact__row',    exit: function(rtl){ return rtl ? 'is-out-right' : 'is-out-left'; } }
  ]
};

function setMotionState(el, cls){
  if (el.__motion === cls) return;             // avoid pointless class churn
  el.__motion = cls;
  el.classList.remove('is-in', 'is-out-left', 'is-out-right');
  el.classList.add(cls);
}

function syncScrollMotion(){
  var vh = window.innerHeight || document.documentElement.clientHeight || 800;
  var rtl = document.documentElement.dir === 'rtl';
  for (var g = 0; g < scrollMotion.groups.length; g++){
    var els = document.querySelectorAll(scrollMotion.groups[g].sel);
    for (var i = 0; i < els.length; i++){
      var el = els[i], r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0){                         // on screen
        setMotionState(el, 'is-in');
      } else if (r.top >= vh){                                 // fully below
        setMotionState(el, scrollMotion.dir === 'up' ? scrollMotion.groups[g].exit(rtl) : 'is-out-left');
      } else {                                                 // fully above
        setMotionState(el, 'is-in');                           // stays in place
      }
    }
  }
}

function scheduleSync(){
  if (!scrollMotion.ticking){
    scrollMotion.ticking = true;
    requestAnimationFrame(function(){
      scrollMotion.ticking = false;
      syncScrollMotion();
    });
  }
  /* settle timeout: even if a rAF is dropped (busy tab, background, etc.)
     the final state is always applied shortly after the last scroll. */
  clearTimeout(scrollMotion.timer);
  scrollMotion.timer = setTimeout(syncScrollMotion, 150);
}

function initScrollMotion(){
  /* gate: the hidden is-out-* states only apply while JS motion is active,
     so content is never invisible by default (see CSS under html.motion-on) */
  document.documentElement.classList.add('motion-on');

  if (!scrollMotion.bound){
    scrollMotion.bound = true;
    window.addEventListener('scroll', function(){
      var y = window.scrollY || 0;
      if (y > scrollMotion.lastY)      scrollMotion.dir = 'down';
      else if (y < scrollMotion.lastY) scrollMotion.dir = 'up';
      scrollMotion.lastY = y;
      scheduleSync();
    }, {passive:true});
    window.addEventListener('resize', scheduleSync, {passive:true});
    window.addEventListener('load', scheduleSync);
    if (document.fonts && document.fonts.ready){
      document.fonts.ready.then(function(){ scheduleSync(); });
    }
  }

  /* collect every animated element (re-collected after re-renders) */
  var els = [];
  for (var g = 0; g < scrollMotion.groups.length; g++){
    els = els.concat(Array.prototype.slice.call(document.querySelectorAll(scrollMotion.groups[g].sel)));
  }
  if (!els.length) return;

  scrollMotion.dir = 'down';
  scrollMotion.lastY = window.scrollY || 0;

  /* place without transitions, double-rAF so the initial hidden state is
     actually painted before transitions are enabled (prevents Chrome
     skipping the entrance) */
  els.forEach(function(el){ el.classList.add('m--init'); });
  syncScrollMotion();
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      els.forEach(function(el){ el.classList.remove('m--init'); });
    });
  });

  /* IntersectionObserver: whatever enters the viewport settles visible —
     a guaranteed in-view driver independent of scroll events. */
  if ('IntersectionObserver' in window){
    if (scrollMotion.io) scrollMotion.io.disconnect();
    scrollMotion.io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting) setMotionState(en.target, 'is-in');
      });
    });
    els.forEach(function(el){ scrollMotion.io.observe(el); });
  }
}

/* ---------------- 11. COURSES : TAB UI + ACTIONS ---------------- */
var COURSE_STATE = { tab:'free' };
var coursesHydrated = false;
var coursesObserver = null;

function L(obj){ return (obj && (obj[state.lang] || obj.en)) || ''; }

/* Populate the static header and drawer session links from the same course
   data used by the cards. This avoids duplicate translated titles and keeps
   the label current whenever the language changes. */
function updateNavSessionTitles(){
  var isFa = state.lang === 'fa';
  
  /* 1. Desktop dropdown: update all leaf session links */
  $$('#coursesMenu .menu__link[data-session]').forEach(function(link){
    var parent = link.parentElement;
    if (parent && parent.classList.contains('menu__item--has-sub')) return;
    var course = findCourse(link.getAttribute('data-session'));
    if (!course) return;
    var sessLabel = course.sess ? L(course.sess) : '';
    var titleLabel = L(course.title);

    link.innerHTML = '';
    var sessSpan = document.createElement('span');
    sessSpan.className = 'menu__session-name';
    sessSpan.textContent = sessLabel ? sessLabel + ' — ' : '';

    var titleSpan = document.createElement('span');
    titleSpan.className = 'menu__session-title';
    titleSpan.textContent = titleLabel;

    link.appendChild(sessSpan);
    link.appendChild(titleSpan);
    link.setAttribute('dir', isFa ? 'rtl' : 'ltr');
  });

  /* 2. Mobile/Tablet drawer: update all session links */
  $$('#drawer .drawer__sublink[data-session]').forEach(function(link){
    var course = findCourse(link.getAttribute('data-session'));
    if (!course) return;
    var sessLabel = course.sess ? L(course.sess) : '';
    var titleLabel = L(course.title);

    link.innerHTML = '';
    var sessSpan = document.createElement('span');
    sessSpan.className = 'menu__session-name';
    sessSpan.textContent = sessLabel;

    var titleSpan = document.createElement('span');
    titleSpan.className = 'menu__session-title';
    titleSpan.textContent = titleLabel;

    link.appendChild(sessSpan);
    link.appendChild(titleSpan);
    link.setAttribute('dir', isFa ? 'rtl' : 'ltr');
  });
}
function getJSON(key, fb){
  try{ var v = JSON.parse(localStorage.getItem(key)); return Array.isArray(v) ? v : fb; }catch(e){ return fb; }
}
function setJSON(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){}
}
function getLikes(){ return getJSON('cwb-likes', []); }
function getCartItems(){ return getJSON('cwb-cart', []); }
function findCourse(id){
  for (var i = 0; i < APP_CONFIG.courses.length; i++)
    if (APP_CONFIG.courses[i].id === id) return APP_CONFIG.courses[i];
  return null;
}
function decodeHTML(s){
  var d = document.createElement('div');
  d.innerHTML = s;
  return d.textContent || d.innerText || s;
}

var ICONS = {
  html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
  css:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1"/></svg>',
  js:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v4a2 2 0 0 1-2 2H4m12-6v4a2 2 0 0 0 2 2h2M9 21c.6-2.3 1.6-3 3-3s2.4.7 3 3"/><path d="M12 12v6"/></svg>',
  comp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6.4a5 5 0 1 1 7.5 6.2Z"/></svg>',
  dl:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20.5" r="1.6"/><circle cx="17.5" cy="20.5" r="1.6"/><path d="M2.5 3.5h2l2.6 12.2a1.8 1.8 0 0 0 1.8 1.4h8.6a1.8 1.8 0 0 0 1.7-1.3L21.5 7H6"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="m8.3 10.8 7.4-4.4M8.3 13.2l7.4 4.4"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 6 6L20 6"/></svg>'
};

function tryitMarkup(c){
  return '<div class="tryit" data-tryid="' + c.id + '">' +
    '<header class="tryit__head">' +
      '<span class="tryit__title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M13 5l-2 14"/></svg>' + t('try_title') + '</span>' +
      '<span class="tryit__hint" aria-hidden="true">Ctrl/⌘ + Enter</span>' +
      '<div class="tryit__tabs">' +
        '<button class="tryit__tab is-active" type="button" data-trytab="code">' + t('try_code') + '</button>' +
        '<button class="tryit__tab" type="button" data-trytab="output">' + t('try_output') + '</button>' +
      '</div>' +
      '<button class="tryit__reset" type="button" data-tryreset="' + c.id + '">' + t('try_reset') + '</button>' +
    '</header>' +
    '<div class="tryit__body">' +
      '<div class="tryit__pane tryit__code"><textarea data-trycode spellcheck="false" aria-label="' + t('try_code') + '" placeholder="' + t('try_ph') + '"></textarea></div>' +
      '<div class="tryit__pane tryit__out is-off"><div class="tryit__frame" data-tryout></div></div>' +
    '</div>' +
  '</div>';
}

var PRAISE = {
  en: ['Correct!', 'Excellent!', 'Awesome!', 'Good job!', 'Perfect! 🎉', 'Well done!'],
  fa: ['درست است!', 'عالی!', 'فوق‌العاده!', 'آفرین!', 'کامل! 🎉', 'آفرین بر تو!'],
  it: ['Corretto!', 'Eccellente!', 'Fantastico!', 'Ottimo lavoro!', 'Perfetto! 🎉', 'Bravissimo!']
};
function praise(){
  var list = PRAISE[state.lang] || PRAISE.en;
  return list[Math.floor(Math.random() * list.length)];
}

/* Lightweight quiz audio uses the Web Audio API, so GitHub Pages needs no
   audio files or server endpoint. Sound is supplementary to text/color. */
var quizAudioContext = null;
function playQuizSound(correct){
  try{
    var AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!quizAudioContext) quizAudioContext = new AudioCtx();
    var ctx = quizAudioContext;
    if (ctx.state === 'suspended') ctx.resume();
    var now = ctx.currentTime;
    var notes = correct
      ? [{f:523.25,t:0,d:.16,type:'sine'},{f:659.25,t:.12,d:.2,type:'sine'}]
      : [{f:220,t:0,d:.16,type:'triangle'},{f:164.81,t:.11,d:.22,type:'sawtooth'}];
    notes.forEach(function(note){
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = note.type;
      osc.frequency.setValueAtTime(note.f,now + note.t);
      gain.gain.setValueAtTime(.0001,now + note.t);
      gain.gain.exponentialRampToValueAtTime(correct ? .055 : .038,now + note.t + .018);
      gain.gain.exponentialRampToValueAtTime(.0001,now + note.t + note.d);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(now + note.t); osc.stop(now + note.t + note.d + .03);
    });
  }catch(e){}
}

function triggerQuizHaptics(correct){
  /* The Vibration API is supported mainly on Android. iOS and unsupported
     browsers keep the short Web Audio feedback, triggered by the same tap. */
  if (!window.matchMedia || !window.matchMedia('(pointer: coarse)').matches) return;
  if (!navigator.vibrate) return;
  try { navigator.vibrate(correct ? [18, 42, 26] : [42, 38, 58]); } catch(e){}
}

function launchQuizConfetti(option){
  if (!option || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var colors = ['#4F7DF3','#7C3AED','#A855F7','#D4AF37','#22C55E','#F43F5E','#38BDF8'];
  var burst = document.createElement('span');
  burst.className = 'quiz-confetti-burst';
  burst.setAttribute('aria-hidden','true');
  for (var i = 0; i < 22; i++){
    var paper = document.createElement('i');
    paper.style.setProperty('--confetti-x', (Math.random() * 190 - 95).toFixed(1) + 'px');
    paper.style.setProperty('--confetti-lift', (-45 - Math.random() * 85).toFixed(1) + 'px');
    paper.style.setProperty('--confetti-fall', (45 + Math.random() * 90).toFixed(1) + 'px');
    paper.style.setProperty('--confetti-r', (Math.random() * 720 - 360).toFixed(0) + 'deg');
    paper.style.setProperty('--confetti-delay', (Math.random() * .12).toFixed(2) + 's');
    paper.style.setProperty('--confetti-color', colors[i % colors.length]);
    burst.appendChild(paper);
  }
  option.appendChild(burst);
  setTimeout(function(){ burst.remove(); },1300);
}

function localizedQuestionLabel(index){
  var number = index + 1;
  if (state.lang === 'fa'){
    return { text:'سؤال ' + String(number).replace(/[0-9]/g, function(d){ return '۰۱۲۳۴۵۶۷۸۹'[+d]; }), dir:'rtl' };
  }
  return { text:(state.lang === 'it' ? 'D' : 'Q') + number + '.', dir:'ltr' };
}
function courseTextDirection(){ return state.lang === 'fa' ? 'rtl' : 'ltr'; }
function courseText(value){
  var text = L(value);
  /* Isolate encoded HTML snippets such as &lt;!DOCTYPE html&gt; from Persian
     prose. This prevents the Unicode bidi algorithm from moving a question
     number or reversing the visible code fragment. */
  if (state.lang === 'fa'){
    text = text.replace(/(&lt;[^&]*?&gt;)/g, '<bdi class="course-code-ltr" dir="ltr">$1</bdi>');
  }
  return text;
}
function questionLabelMarkup(index, className){
  var label = localizedQuestionLabel(index);
  return '<bdi class="' + className + '" dir="' + label.dir + '">' + label.text + '</bdi>';
}
function quizHTML(c){
  return '<div class="quiz">' + (c.quiz || []).map(function(q, i){
    return '<div class="quizq">' +
      '<p class="quizq__q">' + questionLabelMarkup(i, 'quizq__num') + '<span dir="' + courseTextDirection() + '">' + courseText(q.q) + '</span></p>' +
      '<div class="quizq__opts">' + q.opts.map(function(o, j){
        return '<button class="quizq__opt" type="button" data-quiz="' + c.id + '" data-q="' + i + '" data-o="' + j + '">' +
          '<span class="quizq__ltr">' + 'ABCD'[j] + '</span><span dir="' + courseTextDirection() + '">' + L(o) + '</span></button>';
      }).join('') + '</div>' +
      '<p class="quizq__fb" role="status"></p>' +
    '</div>';
  }).join('') + '</div>';
}

function exHTML(c){
  return '<div class="ex">' + (c.ex || []).map(function(x, i){
    return '<div class="exq">' +
      '<p class="exq__t">' + t('ex_fill') + '</p>' +
      '<pre class="exq__code">' + x.lines.map(function(line){
        return line.replace('[blank]', '<input class="exq__blank" data-blank="' + c.id + '-' + i + '" size="8" autocomplete="off" spellcheck="false" aria-label="' + t('ex_blank') + '">');
      }).join('\n') + '</pre>' +
      '<div class="exq__cta">' +
        '<button class="exq__btn" type="button" data-excheck="' + c.id + '" data-e="' + i + '">' + t('ex_check') + '</button>' +
        '<button class="exq__btn exq__btn--ghost" type="button" data-exshow="' + c.id + '" data-e="' + i + '">' + t('ex_show') + '</button>' +
      '</div>' +
      '<p class="exq__fb" role="status"></p>' +
    '</div>';
  }).join('') + '</div>';
}

function practiceHTML(c){
  if (c.kind !== 'course') return '';
  return '<section class="practice">' +
    '<div class="practice__bar">' +
      '<button class="practice__btn is-active" type="button" data-practice="quiz" data-pid="' + c.id + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 9.5a3 3 0 1 1 4 2.8c-.7.4-1 .9-1 1.7M12 17.2v.1"/></svg>' + t('practice_quiz') + '</button>' +
      '<button class="practice__btn" type="button" data-practice="ex" data-pid="' + c.id + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>' + t('practice_ex') + '</button>' +
    '</div>' +
    '<div class="practice__panel is-on" data-panel="quiz" data-pid="' + c.id + '">' + quizHTML(c) + '</div>' +
    '<div class="practice__panel" data-panel="ex" data-pid="' + c.id + '">' + exHTML(c) + '</div>' +
  '</section>';
}

function courseCard(c, likes){
  var liked = likes.indexOf(c.id) > -1;
  var topicTxt = c.topic === 'comp' ? t('chip_comp') : c.topic.toUpperCase();
  var topicChip = '<span class="chip chip--topic">' + (ICONS[c.topic] || ICONS.comp) + topicTxt + '</span>';
  var priceChip = c.price
    ? '<span class="chip chip--premium">' + t('premium') + ' · $' + c.price + '</span>'
    : '<span class="chip chip--free">' + t('free') + '</span>';
  var sessChip = (c.kind === 'course' && c.sess) ? '<span class="chip">' + L(c.sess) + '</span>' : '';
  var body = '';
  if (c.kind === 'course' && c.qa){
    /* 1) question index — each question links to its answer below */
    body = '<nav class="cqa-index" aria-label="' + t('q_index_label') + '">' +
        '<p class="cqa-index__label">' + t('q_index_label') + '</p>' +
        '<ol>' + c.qa.map(function(qa, i){
          return '<li><a href="#qa-' + c.id + '-' + i + '">' + courseText(qa.q) + '</a></li>';
        }).join('') + '</ol>' +
      '</nav>' +
      /* 2) all questions with their answers, always visible */
      '<div class="cqa">' + c.qa.map(function(qa, i){
        return '<article class="cqa__item" id="qa-' + c.id + '-' + i + '">' +
          '<h4 class="cqa__q">' + questionLabelMarkup(i, 'cqa__num') + '<span dir="' + courseTextDirection() + '">' + L(qa.q) + '</span></h4>' +
          '<div class="cqa__a"><div class="cqa__a-inner" dir="' + courseTextDirection() + '">' + L(qa.a) + '</div></div>' +
        '</article>';
      }).join('') + '</div>';
  }
  if (c.kind === 'component' && c.features){
    body = '<ul class="comp__features">' + c.features.map(function(f){
      return '<li>' + ICONS.check + '<span>' + L(f) + '</span></li>';
    }).join('') + '</ul>';
  }
  var price = c.price ? '<b class="act__price">$' + c.price + '</b>' : '';
  var cartBtn = c.price
    ? '<button class="act act--cart" type="button" data-cart="' + c.id + '">' + ICONS.cart + '<span>' + t('act_cart') + '</span>' + price + '</button>'
    : '';
  var sub = L(c.desc);
  var schemaType = c.kind === 'component' ? 'SoftwareSourceCode' : 'LearningResource';
  return '<article class="course' + (c.price ? ' is-premium' : '') + '" id="' + c.id + '"' +
    ' itemscope itemtype="https://schema.org/' + schemaType + '">' +
    '<link itemprop="url" href="' + publicLangUrl(state.lang) + '#' + c.id + '">' +
    '<meta itemprop="inLanguage" content="' + (state.lang || 'en') + '">' +
    '<header class="course__head">' +
      '<div class="course__meta">' + topicChip + priceChip + sessChip + '</div>' +
      '<h3 class="course__title" itemprop="name">' + L(c.title) + '</h3>' +
      (sub ? '<p class="course__sub" itemprop="description">' + sub + '</p>' : '') +
    '</header>' +
    body +
    tryitMarkup(c) +
    practiceHTML(c) +
    '<footer class="course__actions">' +
      '<button class="act act--like' + (liked ? ' is-liked' : '') + '" type="button" data-like="' + c.id + '" aria-pressed="' + liked + '">' + ICONS.heart + '<span>' + (liked ? t('act_liked') : t('act_like')) + '</span><b class="act__likecount" data-likecount="' + c.id + '">' + ((c.likes || 0) + (liked ? 1 : 0)) + '</b><span class="act__pulse"></span></button>' +
      cartBtn +
      '<button class="act act--share" type="button" data-share="' + c.id + '">' + ICONS.share + '<span>' + t('act_share') + '</span></button>' +
    '</footer>' +
  '</article>';
}

function renderCourses(force){
  var host = $('#courseList'); if (!host) return;

  $$('.tab').forEach(function(b){
    var on = b.getAttribute('data-tab') === COURSE_STATE.tab;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', String(on));
  });
  $$('.tab-group').forEach(function(g){
    g.classList.toggle('is-active', g.getAttribute('data-tabgroup') === COURSE_STATE.tab);
  });
  fillSessionMenus();

  if (!coursesHydrated && !force){
    host.setAttribute('aria-busy','true');
    host.innerHTML = '<div class="course-placeholder" role="status"><span class="course-placeholder__pulse" aria-hidden="true"></span><span>' + t('courses_loading') + '</span></div>';
    return;
  }

  coursesHydrated = true;
  host.setAttribute('aria-busy','false');
  var likes = getLikes();
  var items = APP_CONFIG.courses.filter(function(c){ return c.tab === COURSE_STATE.tab; });
  host.innerHTML = items.map(function(c){ return courseCard(c, likes); }).join('');
  attachCodeOutputs();

  /* fill the try-it editors: saved code (localStorage) or starter code */
  $$('.tryit').forEach(function(box){
    var id = box.getAttribute('data-tryid');
    var c = findCourse(id); if (!c) return;
    var ta = box.querySelector('[data-trycode]'); if (!ta) return;
    var saved = null;
    try { saved = localStorage.getItem('cwb-try-' + id); } catch(e){}
    ta.value = saved != null ? saved : (c.starter || decodeHTML(c.code || ''));
    box.classList.remove('is-run');
    box.querySelector('.tryit__code').classList.remove('is-off');
    box.querySelector('.tryit__out').classList.add('is-off');
    $$('.tryit__tab', box).forEach(function(b){
      b.classList.toggle('is-active', b.getAttribute('data-trytab') === 'code');
    });
  });
}

function ensureCoursesRendered(){
  if (coursesHydrated) return;
  coursesHydrated = true;
  if (coursesObserver) coursesObserver.disconnect();
  renderCourses(true);
}

function initLazyCourses(){
  var section = document.getElementById('courses');
  if (!section) return;
  var hash = (location.hash || '').replace(/^#/,'');
  if (hash === 'courses' || findCourse(hash)){
    ensureCoursesRendered();
    return;
  }
  if ('IntersectionObserver' in window){
    coursesObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) ensureCoursesRendered();
      });
    }, {rootMargin:'350px 0px',threshold:0});
    coursesObserver.observe(section);
  } else {
    setTimeout(ensureCoursesRendered, 1200);
  }
}

function escapeHtml(str){
  return String(str == null ? '' : str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function cleanCodeSample(raw){
  return String(raw || '')
    .replace(/[ \t]*[\u2190\u2192\u21d0\u21d2].*$/gm, '')
    .replace(/[ \t]*&larr;.*$/gm, '')
    .replace(/[ \t]*&rarr;.*$/gm, '')
    .replace(/[ \t]+$/gm, '')
    .trim();
}

function cssPreviewDoc(css){
  var extra = '';
  if (/\.btn\b/.test(css)) extra += '<p><button class="btn">Button</button></p>';
  if (/\.box\b/.test(css)) extra += '<div class="box">I am a box</div>';
  if (/\.row\b/.test(css)) extra += '<div class="row"><div class="item">One</div><div class="item">Two</div><div class="item">Three</div></div>';
  if (/\.nav\b/.test(css)) extra += '<nav class="nav"><a href="#">Home</a> <a href="#">About</a></nav>';
  if (/\.grid\b|\.cards\b|\.page\b/.test(css)) extra += '<div class="grid cards page"><div>1</div><div>2</div><div>3</div></div>';
  if (/\bh1\b/.test(css)) extra += '<h1>Heading</h1>';
  if (/\bp\b/.test(css) || !extra) extra += '<p>Sample paragraph</p>';
  return '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<style>html,body{margin:0;padding:12px;font-family:Arial,Helvetica,sans-serif;color:#222;background:#fff}img{max-width:120px}' +
    css + '</style></head><body>' + extra + '</body></html>';
}

function sampleToPreview(raw){
  var src = cleanCodeSample(raw);
  if (!src) return null;
  if (/^URL\b/i.test(src) && src.indexOf('<') < 0) return null;
  var hasHTML = /<!DOCTYPE/i.test(src) || /<\/?[a-zA-Z!][\s\S]*>/.test(src);
  if (hasHTML){
    src = src.replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>\s*(?:\u2026|\.\.\.)\s*<\/\1>/g, '<$1$2>$1</$1>');
    src = src.replace(/\bsrc="(?:photo|cat)\.jpg"/g, 'src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27880%27 height=%2756%27%3E%3Crect fill=%27%234F7DF3%27 width=%2788%27 height=%2756%27 rx=%278%27/%3E%3Ctext x=%2744%27 y=%2734%27 text-anchor=%27middle%27 fill=%27white%27 font-size=%2712%27 font-family=%27Arial%27%3Eimg%3C/text%3E%3C/svg%3E"');
    var titleMatch = src.match(/<title>([^<]*)<\/title>/i);
    return { html: wrapTry(src), tab: titleMatch ? titleMatch[1] : '' };
  }
  if (/^[^{]+\{[\s\S]*[a-z-]+\s*:/m.test(src)){
    return { html: cssPreviewDoc(src), tab: '' };
  }
  return null;
}

var codeOutputObserver = null;
var codeOutputResumeTimer = 0;

function hydrateCodeOutput(block){
  if (!block || (block.parentElement && block.parentElement.classList.contains('code-duo'))) return;
  var rawNode = block.querySelector('code') || block;
  var preview = sampleToPreview(rawNode.textContent || '');
  if (!preview) return;
  var wrap = document.createElement('div');
  wrap.className = 'code-duo';
  block.parentNode.insertBefore(wrap, block);
  wrap.appendChild(block);
  var pane = document.createElement('div');
  pane.className = 'code-duo__out';
  var tab = preview.tab || t('code_tab');
  pane.innerHTML = '<div class="code-duo__bar">' +
    '<span class="code-duo__dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
    '<span class="code-duo__tab">' + escapeHtml(tab) + '</span>' +
    '<span>' + t('code_output') + '</span></div>' +
    '<div class="code-duo__frame"></div>';
  wrap.appendChild(pane);
  var host = pane.querySelector('.code-duo__frame');
  var f = document.createElement('iframe');
  f.title = t('code_output');
  f.setAttribute('sandbox', '');
  f.setAttribute('loading', 'lazy');
  f.srcdoc = preview.html;
  host.appendChild(f);
  requestAnimationFrame(function(){
    f.style.minHeight = Math.max(168, block.getBoundingClientRect().height || 0) + 'px';
  });
}

function makeScrollableCodeAccessible(root){
  $$('.ans-code,.exq__code', root || document).forEach(function(block){
    block.setAttribute('tabindex','0');
    block.setAttribute('role','region');
    block.setAttribute('aria-label', t('code_sample'));
  });
}

function attachCodeOutputs(afterNavigation){
  /* Code text is immediately available and keyboard-focusable, while the
     optional live preview iframe is created only shortly before it reaches
     the viewport. This removes dozens of off-screen browsing contexts from
     the initial main-thread workload. */
  if (codeOutputObserver) codeOutputObserver.disconnect();
  var blocks = $$('.cqa__a-inner .ans-code').filter(function(block){
    return !(block.parentElement && block.parentElement.classList.contains('code-duo'));
  });
  makeScrollableCodeAccessible($('#courseList'));
  if (!('IntersectionObserver' in window)){
    blocks.forEach(hydrateCodeOutput);
    return;
  }
  codeOutputObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      codeOutputObserver.unobserve(entry.target);
      hydrateCodeOutput(entry.target);
    });
  }, {rootMargin:afterNavigation ? '0px 0px 500px 0px' : '500px 0px',threshold:0});
  blocks.forEach(function(block){ codeOutputObserver.observe(block); });
}
function pauseCodeOutputsForNavigation(){
  if (codeOutputObserver) codeOutputObserver.disconnect();
  clearTimeout(codeOutputResumeTimer);
  codeOutputResumeTimer = setTimeout(function(){ attachCodeOutputs(true); },6500);
}
function resumeCodeOutputsAfterNavigation(){
  clearTimeout(codeOutputResumeTimer);
  codeOutputResumeTimer = 0;
  attachCodeOutputs(true);
}
function sessionMenuHTML(tab){
  var items = APP_CONFIG.courses.filter(function(c){ return c.tab === tab && c.kind === 'course'; });
  var groups = { html:[], css:[], js:[] };
  items.forEach(function(c){
    var key = (c.topic === 'css') ? 'css' : (c.topic === 'js' || c.topic === 'javascript') ? 'js' : 'html';
    groups[key].push(c);
  });
  function sessionLinks(list){
    return list.map(function(c){
      return '<li role="none">' +
        '<a class="tab-menu__link" role="menuitem" href="#' + c.id + '" data-session="' + c.id + '">' +
          '<span class="tab-menu__meta">' + (L(c.sess) || '') + '</span>' +
          '<span class="tab-menu__title">' + L(c.title) + '</span>' +
        '</a></li>';
    }).join('');
  }
  function topicItem(key, label, icon, comingSoon){
    if (comingSoon){
      return '<li class="tab-menu__item tab-menu__item--soon" role="none">' +
        '<span class="tab-menu__topic">' + icon + '<span>' + label + '</span>' +
        '<em class="tab-menu__soon">' + t('coming_soon') + '</em></span></li>';
    }
    var list = groups[key] || [];
    if (!list.length) return '';
    var panelId = 'tab-' + tab + '-' + key + '-sessions';
    return '<li class="tab-menu__item" role="none">' +
      '<button class="tab-menu__topic" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="' + panelId + '" data-topic-toggle>' +
        icon + '<span>' + label + '</span>' +
        '<svg class="tab-menu__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>' +
      '</button>' +
      '<ul class="tab-menu__subs" id="' + panelId + '" role="menu" hidden>' + sessionLinks(list) + '</ul></li>';
  }
  var html = topicItem('html', 'HTML', ICONS.html) + topicItem('css', 'CSS', ICONS.css);
  if (tab === 'free') html += topicItem('js', 'JavaScript', ICONS.js);
  return html;
}

function fillSessionMenus(){
  var free = $('#freeSessionMenu');
  var prem = $('#premiumSessionMenu');
  if (free) free.innerHTML = sessionMenuHTML('free');
  if (prem) prem.innerHTML = sessionMenuHTML('premium');
}

function closeSessionMenus(){
  $$('.tab-group').forEach(function(g){
    clearTimeout(g.__hoverCloseTimer);
    g.classList.remove('is-open');
    g.classList.remove('is-hover-open');
    g.classList.remove('is-dropup');
    g.classList.add('is-closed');
  });
  $$('.tab-caret').forEach(function(b){ b.setAttribute('aria-expanded', 'false'); });
  $$('.tab-menu__item.is-open, .tab-menu__item.is-hover-open').forEach(function(item){
    clearTimeout(item.__hoverCloseTimer);
    item.classList.remove('is-open');
    item.classList.remove('is-hover-open');
    item.classList.remove('is-panel-left','is-panel-right');
    var topic = item.querySelector('[data-topic-toggle]');
    if (topic) topic.setAttribute('aria-expanded','false');
  });
  $$('.tab-menu__subs').forEach(function(panel){ panel.hidden = true; });
}

/* Keep the popover inside the visual viewport. A course tab can be close to
   the bottom edge after scrolling; in that case opening upward prevents the
   menu from looking visible while its buttons sit outside the clickable area. */
function positionSessionMenu(group){
  if (!group) return;
  var menu = group.querySelector(':scope > .tab-menu');
  if (!menu) return;

  /* On mobile/tablet the popover is positioned from the whole tabs bar;
     on desktop it is positioned from its own Free/Premium group. */
  var tabs = group.closest('.tabs');
  var anchor = window.innerWidth <= 1024 && tabs ? tabs : group;
  var r = anchor.getBoundingClientRect();
  var header = document.getElementById('header');
  var safeTop = (header ? header.getBoundingClientRect().height : 0) + 12;
  var safeBottom = 12;
  var menuH = Math.min(menu.scrollHeight || 260, Math.max(220, window.innerHeight * .72));
  var below = Math.max(0, window.innerHeight - r.bottom - safeBottom);
  var above = Math.max(0, r.top - safeTop);
  var dropUp = below < menuH && above > below;

  group.classList.toggle('is-dropup', dropUp);
  var room = dropUp ? above : below;
  var maxH = Math.max(150, Math.min(room - 4, window.innerHeight * .72, 620));
  group.style.setProperty('--session-menu-max', maxH + 'px');
}

function positionTopicSessionPanel(item){
  if (!item) return;
  item.classList.remove('is-panel-left','is-panel-right');
  if (window.innerWidth < 1100 || !item.classList.contains('is-open')) return;
  var panel = item.querySelector(':scope > .tab-menu__subs');
  if (!panel) return;
  var itemRect = item.getBoundingClientRect();
  var panelWidth = panel.hidden ? Math.min(350,window.innerWidth - 32) : (panel.getBoundingClientRect().width || 350);
  var isPersian = document.documentElement.lang === 'fa';
  if (isPersian){
    if (itemRect.left - panelWidth < 12) item.classList.add('is-panel-right');
  } else if (itemRect.right + panelWidth > window.innerWidth - 12){
    item.classList.add('is-panel-left');
  }
  /* Keep the complete session list inside the visible viewport and let the
     panel's own scrollbar reveal Session 4 and later items. */
  var availableHeight = Math.max(160,window.innerHeight - Math.max(12,itemRect.top - 6) - 12);
  panel.style.maxHeight = Math.min(620,availableHeight) + 'px';
}

function toggleSessionMenu(name){
  var group = document.querySelector('.tab-group[data-tabgroup="' + name + '"]');
  var caret = document.querySelector('.tab-caret[data-tabmenu="' + name + '"]');
  if (!group) return;
  var open = !group.classList.contains('is-open');
  closeSessionMenus();
  if (open){
    positionSessionMenu(group);
    group.classList.remove('is-closed');
    group.classList.add('is-open');
    if (caret) caret.setAttribute('aria-expanded', 'true');
  }
}

function scrollToSession(id){
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.add('is-target');
  pauseCodeOutputsForNavigation();
  var header = document.getElementById('header');

  function desiredTop(){
    var hh = header ? header.getBoundingClientRect().height : 0;
    var y = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
    return Math.max(0, el.getBoundingClientRect().top + y - hh - 14);
  }
  /* Lazy previews above the destination can change document height during a
     long journey. Re-measure after arrival and make up to two short, gentle
     corrections so the session heading always settles below the header. */
  function settle(pass){
    setTimeout(function(){
      var now = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
      var target = desiredTop();
      if (pass < 2 && Math.abs(target - now) > 3){
        smoothScrollToY(target,{duration:560,done:function(){ settle(pass + 1); }});
      } else {
        resumeCodeOutputsAfterNavigation();
      }
    },120);
  }
  smoothScrollToDynamic(desiredTop,{done:function(){ settle(0); }});
  clearTimeout(el.__targetTm);
  el.__targetTm = setTimeout(function(){ el.classList.remove('is-target'); }, 4800);
}

function goToSession(id){
  var c = findCourse(id);
  if (!c) return;
  closeSessionMenus();
  var tabChanged = COURSE_STATE.tab !== c.tab;
  COURSE_STATE.tab = c.tab;
  if (!coursesHydrated) ensureCoursesRendered();
  else if (tabChanged) renderCourses();
  if (location.hash !== '#' + c.id){
    try { history.replaceState(null, '', '#' + c.id); } catch(e){}
  }
  updateSeo(c);
  requestAnimationFrame(function(){
    setTimeout(function(){ scrollToSession(c.id); }, 40);
  });
}

function applyCourseHash(delay){
  var raw = (location.hash || '').replace(/^#/, '');
  if (!raw) return;
  var c = findCourse(raw);
  if (c){
    COURSE_STATE.tab = c.tab;
    if (!coursesHydrated) ensureCoursesRendered();
    else renderCourses();
    updateSeo(c);
    var wait = typeof delay === 'number' ? delay : 60;
    setTimeout(function(){ scrollToSession(c.id); }, wait);
    return;
  }
  var h = raw.toLowerCase();
  if (h === 'premium' || h.indexOf('premium') > -1) switchTab('premium');
  else if (h === 'components') switchTab('components');
  else if (h === 'free') switchTab('free');
}

function switchTab(name){
  COURSE_STATE.tab = name || 'free';
  closeSessionMenus();
  if (!coursesHydrated) ensureCoursesRendered();
  else renderCourses();
  updateSeo();
}

function goToCoursesTab(name){
  switchTab(name);
  /* Scroll to the filter tabs (the "Free / Premium / Components" buttons)
     so the user lands at the beginning of the chosen course list, instead
     of the very top of the section (which shows the intro text). */
  requestAnimationFrame(function(){
    var tabs = $('.tabs');
    if (!tabs) return;
    var header = document.getElementById('header');
    var hh = header ? header.getBoundingClientRect().height : 0;
    var y = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
    var top = Math.max(0, tabs.getBoundingClientRect().top + y - hh - 12);
    smoothScrollToY(top);
  });
}

/* ---------- toast ---------- */
function toast(msg){
  var el = $('#toast'); if (!el) return;
  el.innerHTML = ICONS.check + '<span>' + msg + '</span>';
  el.classList.add('is-show');
  clearTimeout(el.__tm);
  el.__tm = setTimeout(function(){ el.classList.remove('is-show'); }, 2400);
}

/* ---------- like (localStorage) ---------- */
function toggleLike(id){
  var likes = getLikes(), i = likes.indexOf(id), on;
  if (i > -1){ likes.splice(i, 1); on = false; }
  else { likes.push(id); on = true; }
  setJSON('cwb-likes', likes);
  var c = findCourse(id);
  var base = c && c.likes ? c.likes : 0;
  var btn = document.querySelector('[data-like="' + id + '"]');
  if (btn){
    btn.classList.toggle('is-liked', on);
    btn.setAttribute('aria-pressed', String(on));
    var sp = btn.querySelector('span');
    if (sp) sp.textContent = on ? t('act_liked') : t('act_like');
    var cnt = btn.querySelector('[data-likecount]');
    if (cnt){
      cnt.textContent = base + (on ? 1 : 0);
      cnt.classList.remove('bump');
      void cnt.offsetWidth;
      cnt.classList.add('bump');
    }
    var pulse = btn.querySelector('.act__pulse');
    if (pulse && on){
      pulse.style.animation = 'none';
      void pulse.offsetWidth;
      pulse.style.animation = '';
    }
  }
  toast(on ? t('toast_liked') : t('toast_unliked'));
}

/* ---------- download (Blob) ---------- */
function courseNotes(c){
  var lines = ['CODE WITH BAHAREH', L(c.title) + (c.sess ? ' — ' + L(c.sess) : ''), L(c.desc), ''];
  (c.qa || []).forEach(function(qa, i){
    lines.push('Q' + (i + 1) + ': ' + L(qa.q)); lines.push('');
    lines.push(decodeHTML(L(qa.a))); lines.push('');
  });
  return lines.join('\n');
}
function dlItem(id){
  var c = findCourse(id); if (!c) return;
  var text = c.kind === 'component'
    ? '<!-- Code with Bahareh — ' + L(c.title) + ' -->\n' + decodeHTML(c.code || '')
    : courseNotes(c);
  var blob = new Blob([text], { type:'text/plain;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = c.id + (c.kind === 'component' ? '.html' : '.txt');
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function(){ URL.revokeObjectURL(a.href); }, 4000);
  toast(t('toast_dl'));
}

/* ---------- share (Web Share API + guaranteed copy modal) ---------- */
function legacyCopy(full, announce){
  try{
    var ta = document.createElement('textarea');
    ta.value = full;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    var ok = document.execCommand('copy');
    ta.remove();
    if (ok && announce) toast(t('toast_copied'));
    return ok;
  }catch(e){
    if (announce) toast(t('toast_share_fail'));
    return false;
  }
}
function copyText(full, announce){
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(full).then(function(){
      if (announce) toast(t('toast_copied'));
    }).catch(function(){ legacyCopy(full, announce); });
  } else {
    legacyCopy(full, announce);
  }
}
function openShare(title, text, url){
  var m = $('#shareModal'); if (!m) return;
  $('#shareText').textContent = text;
  var link = $('#shareLink');
  link.value = url;
  m.removeAttribute('inert');
  m.classList.add('is-open');
  var scr = $('#shareScrim');
  if (scr) scr.classList.add('is-open');
  requestAnimationFrame(function(){ link.focus(); link.select(); });
}
function closeShare(){
  var m = $('#shareModal'); if (!m) return;
  m.classList.remove('is-open');
  m.setAttribute('inert', '');
  var scr = $('#shareScrim');
  if (scr) scr.classList.remove('is-open');
}
function shareItem(id){
  var c = findCourse(id); if (!c) return;
  var title = L(c.title);
  var desc = L(c.desc);
  var text = title + (desc ? ' — ' + desc + '. ' : ' — ') + t('share_from');
  /* Always copy the final GitHub Pages URL, even while testing locally. */
  var url = publicLangUrl(state.lang) + '#' + c.id;
  openShare(title, text, url);
  copyText(text + ' ' + url, false);
}

/* ---------- cart (localStorage + drawer) ---------- */
function cartRow(c){
  return '<li class="cart__item">' +
    '<span class="cart__item-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 3-9 4.5 5L12 5l1.5 8L18 8l3 9z"/></svg></span>' +
    '<span><span class="cart__item-name">' + L(c.title) + '</span><br><span class="cart__item-price">$' + c.price + '</span></span>' +
    '<button class="cart__rm" type="button" data-rm="' + c.id + '" aria-label="' + t('cart_remove') + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
  '</li>';
}
function renderCart(){
  var list = $('#cartList'), badge = $('#cartCount'), sumEl = $('#cartTotalSum');
  var items = getCartItems().map(findCourse).filter(Boolean);
  var sum = 0;
  if (list){
    list.innerHTML = items.length
      ? items.map(function(c){ sum += c.price; return cartRow(c); }).join('')
      : '<li class="cart__empty">' + t('cart_empty') + '</li>';
  }
  if (badge){ badge.hidden = items.length === 0; badge.textContent = items.length; }
  if (sumEl) sumEl.textContent = items.length ? '$' + sum : '';
  var lines = items.map(function(c){ return '• ' + L(c.title) + ' ($' + c.price + ')'; }).join('\n');
  var msg = t('cart_msg_head') + '\n' + lines + '\n' + t('cart_total') + ' $' + sum;
  var wa = $('#cartWa');
  if (wa) wa.href = APP_CONFIG.links.whatsapp + '?text=' + encodeURIComponent(msg);
}
function addToCart(id){
  var c = findCourse(id); if (!c || !c.price) return;
  var cart = getCartItems();
  if (cart.indexOf(id) > -1){ toast(t('toast_in_cart')); return; }
  cart.push(id); setJSON('cwb-cart', cart);
  renderCart(); toast(t('toast_added'));
}
function rmFromCart(id){
  setJSON('cwb-cart', getCartItems().filter(function(x){ return x !== id; }));
  renderCart();
}

/* ---------- try-it-yourself editor ---------- */
/* Render a snippet the user typed — if it is only a fragment (e.g.
   just <h1>Hi</h1>), wrap it in a minimal document so it always renders. */
function wrapTry(code){
  code = code.trim();
  if (!code){
    return '<!DOCTYPE html><html><head><meta charset="utf-8">' +
      '<style>body{font-family:Arial,sans-serif;padding:2rem;color:#5a6472;line-height:1.6}</style></head>' +
      '<body><h2>✏️ Write some code first</h2>' +
      '<p>Type HTML in the Code tab, then press Output again.</p></body></html>';
  }
  if (/<!doctype\s+html/i.test(code) || /<html[\s>]/i.test(code) ||
      /<head[\s>]/i.test(code) || /<body[\s>]/i.test(code)) return code;
  return '<!DOCTYPE html><html><head><meta charset="utf-8">' +
         '<meta name="viewport" content="width=device-width, initial-scale=1"></head>' +
         '<body>' + code + '</body></html>';
}
function runTry(box){
  var ta = box.querySelector('[data-trycode]');
  var host = box.querySelector('[data-tryout]');
  var html = wrapTry(ta ? ta.value : '');
  /* create a FRESH iframe every run — avoids the "blank output" bug
     where a reused srcdoc iframe fails to repaint. */
  host.innerHTML = '';
  var f = document.createElement('iframe');
  f.title = t('try_output');
  f.setAttribute('sandbox', 'allow-scripts');
  f.setAttribute('loading', 'eager');
  host.appendChild(f);
  f.srcdoc = html;
  return f;
}
function tryTab(btn){
  var box = btn.closest('.tryit'); if (!box) return;
  var want = btn.getAttribute('data-trytab');
  var codePane = box.querySelector('.tryit__code');
  var outPane  = box.querySelector('.tryit__out');
  if (want === 'output'){
    box.classList.add('is-run');
    outPane.classList.remove('is-off');
    codePane.classList.add('is-off');      /* desktop (is-run) shows both side by side */
    runTry(box);
  } else {
    box.classList.remove('is-run');
    codePane.classList.remove('is-off');
    outPane.classList.add('is-off');
  }
  $$('.tryit__tab', box).forEach(function(b){
    b.classList.toggle('is-active', b === btn);
  });
}
function tryReset(id){
  var box = document.querySelector('.tryit[data-tryid="' + id + '"]'); if (!box) return;
  var c = findCourse(id); if (!c) return;
  var ta = box.querySelector('[data-trycode]');
  var starter = c.starter || decodeHTML(c.code || '');
  ta.value = starter;
  try { localStorage.setItem('cwb-try-' + id, starter); } catch(e){}
  box.classList.remove('is-run');
  box.querySelector('.tryit__code').classList.remove('is-off');
  box.querySelector('.tryit__out').classList.add('is-off');
  $$('.tryit__tab', box).forEach(function(b){
    b.classList.toggle('is-active', b.getAttribute('data-trytab') === 'code');
  });
}

/* ---------- quiz & exercises ---------- */
function normAns(v){
  return String(v || '').replace(/[<>\s]/g, '').toLowerCase();
}
function checkExercise(cid, ei){
  var c = findCourse(cid); if (!c || !c.ex || !c.ex[ei]) return;
  var box = document.querySelector('[data-blank="' + cid + '-' + ei + '"]'); if (!box) return;
  var fb = box.closest('.exq').querySelector('.exq__fb');
  if (normAns(box.value) === normAns(c.ex[ei].ans)){
    box.classList.remove('is-wrong');
    box.classList.add('is-right');
    if (fb){ fb.textContent = praise(); fb.className = 'exq__fb is-right'; }
  } else {
    box.classList.add('is-wrong');
    if (fb){ fb.textContent = t('ex_wrong'); fb.className = 'exq__fb is-wrong'; }
  }
}
function showAnswer(cid, ei){
  var c = findCourse(cid); if (!c || !c.ex || !c.ex[ei]) return;
  var box = document.querySelector('[data-blank="' + cid + '-' + ei + '"]'); if (!box) return;
  var fb = box.closest('.exq').querySelector('.exq__fb');
  box.value = c.ex[ei].ans;
  box.classList.remove('is-wrong');
  box.classList.add('is-right');
  if (fb){ fb.innerHTML = t('ex_ans') + ' <code>&lt;' + c.ex[ei].ans + '&gt;</code>'; fb.className = 'exq__fb is-ans'; }
}

/* ---------- events : delegated ---------- */
function initCourseUI(){
  var fab = $('#cartFab'), scr = $('#cartScrim'), panel = $('#cart'), close = $('#cartClose');
  function isFineMouseActivation(e){
    return e.detail > 0 && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }
  if (fab){
    var openCart = function(){
      renderCart(); panel.classList.add('is-open'); scr.classList.add('is-open');
      panel.removeAttribute('inert'); fab.setAttribute('aria-expanded','true');
    };
    var closeCart = function(){
      panel.classList.remove('is-open'); scr.classList.remove('is-open');
      panel.setAttribute('inert',''); fab.setAttribute('aria-expanded','false');
    };
    fab.addEventListener('click', function(){ panel.classList.contains('is-open') ? closeCart() : openCart(); });
    scr.addEventListener('click', closeCart);
    close.addEventListener('click', closeCart);
    $('#cartClear').addEventListener('click', function(){
      setJSON('cwb-cart', []); renderCart(); toast(t('toast_cart_cleared'));
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape'){
        closeCart();
        closeShare();
        var active = document.activeElement;
        if (active && active.closest && active.closest('.tabs') && active.blur) active.blur();
        closeSessionMenus();
      }
    });
  }
  renderCart();

  /* share modal */
  var shareM = $('#shareModal');
  if (shareM){
    $('#shareClose').addEventListener('click', closeShare);
    $('#shareScrim').addEventListener('click', closeShare);
    $('#shareCopy').addEventListener('click', function(){
      copyText($('#shareLink').value, true);
    });
    var nat = $('#shareNative');
    if (navigator.share){
      nat.hidden = false;
      nat.addEventListener('click', function(){
        var full = $('#shareText').textContent;
        navigator.share({
          title: full.split(' — ')[0] || full,
          text: full,
          url: $('#shareLink').value
        }).catch(function(){});
      });
    }
  }

  /* keep the user's code while typing (survives tab switches / language changes) */
  document.addEventListener('input', function(e){
    var ta = e.target.closest ? e.target.closest('[data-trycode]') : null;
    if (!ta) return;
    var box = ta.closest('.tryit'); if (!box) return;
    try { localStorage.setItem('cwb-try-' + box.getAttribute('data-tryid'), ta.value); } catch(err){}
  });

  /* Ctrl/⌘ + Enter inside the editor runs the code */
  document.addEventListener('keydown', function(e){
    if (!(e.ctrlKey || e.metaKey) || e.key !== 'Enter') return;
    var ta = e.target.closest ? e.target.closest('[data-trycode]') : null;
    if (!ta) return;
    e.preventDefault();
    var box = ta.closest('.tryit');
    var outBtn = box.querySelector('[data-trytab="output"]');
    if (outBtn) tryTab(outBtn);
  });

  document.addEventListener('click', function(e){
    var tgt = e.target;
    if (!tgt.closest || !tgt.closest('.tab-group')) closeSessionMenus();
    var el = tgt.closest ? tgt.closest('[data-like]') : null;
    if (el){ toggleLike(el.getAttribute('data-like')); return; }
    el = tgt.closest ? tgt.closest('[data-dl]') : null;
    if (el){ dlItem(el.getAttribute('data-dl')); return; }
    el = tgt.closest ? tgt.closest('[data-cart]') : null;
    if (el){ addToCart(el.getAttribute('data-cart')); return; }
    el = tgt.closest ? tgt.closest('[data-share]') : null;
    if (el){ shareItem(el.getAttribute('data-share')); return; }
    el = tgt.closest ? tgt.closest('[data-rm]') : null;
    if (el){ rmFromCart(el.getAttribute('data-rm')); return; }
    el = tgt.closest ? tgt.closest('[data-trytab]') : null;
    if (el){ tryTab(el); return; }
    el = tgt.closest ? tgt.closest('[data-tryreset]') : null;
    if (el){ tryReset(el.getAttribute('data-tryreset')); return; }
    /* practice: switch between Quiz and Exercises panels */
    el = tgt.closest ? tgt.closest('[data-practice]') : null;
    if (el){
      var pid = el.getAttribute('data-pid');
      var bar = el.closest('.practice__bar');
      $$('.practice__btn', bar).forEach(function(b){
        b.classList.toggle('is-active', b === el);
      });
      $$('.practice__panel[data-pid="' + pid + '"]').forEach(function(p){
        p.classList.toggle('is-on', p.getAttribute('data-panel') === el.getAttribute('data-practice'));
      });
      return;
    }
    /* quiz answer */
    el = tgt.closest ? tgt.closest('[data-quiz]') : null;
    if (el){
      var cid = el.getAttribute('data-quiz'), qi = +el.getAttribute('data-q'), oi = +el.getAttribute('data-o');
      var c = findCourse(cid);
      var q = c && c.quiz ? c.quiz[qi] : null;
      var item = el.closest('.quizq'), fb = item.querySelector('.quizq__fb');
      if (item.classList.contains('is-done')) return;
      if (q && oi === q.a){
        item.classList.add('is-done');
        el.classList.add('is-right');
        playQuizSound(true);
        triggerQuizHaptics(true);
        launchQuizConfetti(el);
        if (fb){ fb.textContent = praise(); fb.className = 'quizq__fb is-right'; }
      } else {
        el.classList.add('is-wrong');
        playQuizSound(false);
        triggerQuizHaptics(false);
        if (fb){ fb.textContent = t('quiz_wrong'); fb.className = 'quizq__fb is-wrong'; }
      }
      return;
    }
    /* exercise: check */
    el = tgt.closest ? tgt.closest('[data-excheck]') : null;
    if (el){
      checkExercise(el.getAttribute('data-excheck'), +el.getAttribute('data-e'));
      return;
    }
    /* exercise: show answer */
    el = tgt.closest ? tgt.closest('[data-exshow]') : null;
    if (el){ showAnswer(el.getAttribute('data-exshow'), +el.getAttribute('data-e')); return; }
    el = tgt.closest ? tgt.closest('[data-topic-toggle]') : null;
    if (el){
      e.preventDefault();
      e.stopPropagation();
      var item = el.closest('.tab-menu__item');
      if (item){
        var open = !item.classList.contains('is-open');
        /* Mobile/tablet uses an accordion: keep one readable topic open at
           a time and synchronize every ARIA state for keyboard users. */
        if (open && item.parentElement){
          Array.prototype.forEach.call(item.parentElement.children, function(sibling){
            if (sibling === item || !sibling.classList) return;
            sibling.classList.remove('is-open');
            sibling.classList.remove('is-hover-open');
            sibling.classList.remove('is-panel-left','is-panel-right');
            var siblingBtn = sibling.querySelector('[data-topic-toggle]');
            var siblingPanel = sibling.querySelector('.tab-menu__subs');
            if (siblingBtn) siblingBtn.setAttribute('aria-expanded','false');
            if (siblingPanel) siblingPanel.hidden = true;
          });
        }
        var panel = item.querySelector(':scope > .tab-menu__subs');
        item.classList.remove('is-hover-open');
        item.classList.toggle('is-open', open);
        if (open) positionTopicSessionPanel(item);
        if (panel) panel.hidden = !open;
        if (open) positionTopicSessionPanel(item);
        el.setAttribute('aria-expanded', String(open));
        if (open) requestAnimationFrame(function(){ positionTopicSessionPanel(item); });
        else item.classList.remove('is-panel-left','is-panel-right');
        if (isFineMouseActivation(e) && el.blur) el.blur();
        /* Keep the parent popover anchored while this panel expands. Its
           own overflow area handles short viewports without moving the
           pointer onto another top-level tab. */
      }
      return;
    }
    el = tgt.closest ? tgt.closest('[data-session]') : null;
    if (el){
      e.preventDefault();
      goToSession(el.getAttribute('data-session'));
      return;
    }
    el = tgt.closest ? tgt.closest('[data-tabmenu]') : null;
    if (el){
      e.preventDefault();
      e.stopPropagation();
      if (window.innerWidth >= 1100 && isFineMouseActivation(e)){
        if (el.blur) el.blur();
        return;
      }
      toggleSessionMenu(el.getAttribute('data-tabmenu'));
      if (isFineMouseActivation(e) && el.blur) el.blur();
      return;
    }
    el = tgt.closest ? tgt.closest('.tab') : null;
    if (el){
      if (window.innerWidth >= 1100 && isFineMouseActivation(e)){
        e.preventDefault();
        if (el.blur) el.blur();
        return;
      }
      var tabName = el.getAttribute('data-tab');
      var group = el.closest('.tab-group');
      var willOpen = group && !group.classList.contains('is-open');
      switchTab(tabName);
      /* touching the "Free / Premium courses" button also reveals its
         session dropdown (HTML / CSS / JS). Tapping it again collapses. */
      if (willOpen) toggleSessionMenu(tabName);
      if (isFineMouseActivation(e) && el.blur) el.blur();
      return;
    }
    /* nav / footer / hero links that carry data-tab */
    el = tgt.closest ? tgt.closest('a[data-tab]') : null;
    if (el){
      e.preventDefault();
      goToCoursesTab(el.getAttribute('data-tab'));
    }
  });

  $$('.tab-group').forEach(function(g){
    g.addEventListener('focusin', function(){
      var r = g.getBoundingClientRect();
      var header = document.getElementById('header');
      var topSafe = (header ? header.getBoundingClientRect().height : 0) + 16;
      if (r.top < topSafe || r.bottom > window.innerHeight - 180){
        g.scrollIntoView({block:'center',inline:'nearest',behavior:'auto'});
      }
      positionSessionMenu(g);
      requestAnimationFrame(function(){ positionSessionMenu(g); });
    });
  });

  /* Use real pointer movement—not pointerenter caused by an expanding menu.
     This makes Premium replace Free immediately when the user moves there,
     while a clicked HTML/CSS/JS accordion cannot accidentally trigger a
     neighboring top-level tab merely because its geometry changed. */
  var tabsBar = document.querySelector('.tabs');
  var hoveredTopTab = null;
  function closeCourseHoverMenus(){
    if (!tabsBar) return;
    $$('.tab-group.is-hover-open', tabsBar).forEach(function(g){
      if (g.classList.contains('is-open') || g.matches(':focus-within')) return;
      g.classList.remove('is-hover-open');
      g.classList.remove('is-dropup');
      g.classList.add('is-closed');
      var caret = g.querySelector('.tab-caret');
      if (caret) caret.setAttribute('aria-expanded','false');
      $$('.tab-menu__item.is-open', g).forEach(function(item){
        item.classList.remove('is-open');
        var topic = item.querySelector('[data-topic-toggle]');
        var panel = item.querySelector('.tab-menu__subs');
        if (topic) topic.setAttribute('aria-expanded','false');
        if (panel) panel.hidden = true;
      });
    });
    hoveredTopTab = null;
  }
  if (tabsBar){
    tabsBar.addEventListener('pointermove', function(e){
      /* Responsive/mobile course menus are click/tap/keyboard only. Hover
         disclosure is intentionally limited to large desktop layouts. */
      if (window.innerWidth < 1100 || window.matchMedia('(hover: none)').matches || !e.target.closest) return;
      var g = e.target.closest('.tab-group');
      if (g && tabsBar.contains(g)){
        if (hoveredTopTab === g && (g.classList.contains('is-hover-open') || g.classList.contains('is-open'))) return;
        hoveredTopTab = g;
        closeSessionMenus();
        positionSessionMenu(g);
        g.classList.remove('is-closed');
        g.classList.add('is-hover-open');
        var caret = g.querySelector('.tab-caret');
        if (caret) caret.setAttribute('aria-expanded','true');
        return;
      }
      var componentsTab = e.target.closest('.tab[data-tab="components"]');
      if (componentsTab && componentsTab.parentElement === tabsBar){
        if (hoveredTopTab === componentsTab && COURSE_STATE.tab === 'components') return;
        hoveredTopTab = componentsTab;
        closeSessionMenus();
        if (COURSE_STATE.tab !== 'components') switchTab('components');
        return;
      }
      closeCourseHoverMenus();
    });
    document.addEventListener('pointermove', function(e){
      if (window.matchMedia('(hover: none)').matches || !hoveredTopTab) return;
      if (hoveredTopTab.contains && hoveredTopTab.contains(e.target)) return;
      closeCourseHoverMenus();
    }, {passive:true});

    /* On large screens, a wheel gesture over an open course popover belongs
       to that popover—not to the document behind it. Preventing background
       scroll keeps the Persian RTL menu anchored under the pointer; a long
       session panel still scrolls internally. */
    tabsBar.addEventListener('wheel', function(e){
      if (window.innerWidth < 1100 || window.matchMedia('(hover: none)').matches || !e.target.closest) return;
      var group = e.target.closest('.tab-group');
      if (!group || !(group.classList.contains('is-hover-open') || group.classList.contains('is-open'))) return;
      var scroller = e.target.closest('.tab-menu__subs:not([hidden]),.tab-menu');
      if (scroller && scroller.scrollHeight > scroller.clientHeight){
        scroller.scrollTop += e.deltaY;
      }
      e.preventDefault();
    }, {passive:false});
  }

  /* Topic accordions are intentionally click/Enter-only. Their session
     panels remain hidden while merely hovered or focused. */

  var sessionMenuPositionQueued = false;
  function queueSessionMenuPosition(){
    if (sessionMenuPositionQueued) return;
    sessionMenuPositionQueued = true;
    requestAnimationFrame(function(){
      sessionMenuPositionQueued = false;
      var openGroup = document.querySelector('.tab-group.is-open, .tab-group.is-hover-open');
      if (openGroup) positionSessionMenu(openGroup);
      var openItem = document.querySelector('.tab-menu__item.is-open');
      if (openItem) positionTopicSessionPanel(openItem);
    });
  }
  window.addEventListener('resize', queueSessionMenuPosition, {passive:true});
  window.addEventListener('scroll', queueSessionMenuPosition, {passive:true});

  var navDrop = $('#coursesItem');
  if (navDrop){
    navDrop.addEventListener('mouseleave', function(){
      navDrop.classList.remove('is-open');
      var link = navDrop.querySelector(':scope > .nav__link');
      if (link) link.setAttribute('aria-expanded', 'false');
      var ae = document.activeElement;
      if (ae && navDrop.contains(ae) && ae.blur) ae.blur();
    });
  }
}

/* ---------------- 12. SEO : titles, meta, FAQ + Course JSON-LD ---------------- */
var SITE_ORIGIN = 'https://baharehwebdesign.github.io/';
function publicLangUrl(lang){ return SITE_ORIGIN + (lang || 'en') + '/'; }

function setMeta(sel, attr, val){
  var el = document.querySelector(sel);
  if (el) el.setAttribute(attr, val);
}

function updateSeo(course){
  var langUrl = publicLangUrl(state.lang);
  var title, desc, url = langUrl;
  var hash = (location.hash || '').replace(/^#/, '');
  if (course){
    title = L(course.title) + (course.sess ? ' — ' + L(course.sess) : '') + ' | Code with Bahareh';
    desc = L(course.desc) || (L(course.title) + '. ' + t('seo_home_d'));
    url = langUrl + '#' + course.id;
  } else if (hash === 'premium' || (hash === 'courses' && COURSE_STATE.tab === 'premium')){
    title = t('seo_premium'); desc = t('seo_premium_d'); url = langUrl + '#courses';
  } else if (hash === 'components' || (hash === 'courses' && COURSE_STATE.tab === 'components')){
    title = t('seo_comp'); desc = t('seo_comp_d'); url = langUrl + '#courses';
  } else if (hash === 'courses' || hash === 'free'){
    title = t('seo_free'); desc = t('seo_free_d'); url = langUrl + '#courses';
  } else {
    title = t('seo_home'); desc = t('seo_home_d');
  }
  if (title) document.title = title;
  if (desc){
    setMeta('meta[name="description"]', 'content', desc);
    setMeta('meta[property="og:description"]', 'content', desc);
    setMeta('meta[name="twitter:description"]', 'content', desc);
  }
  setMeta('link[rel="canonical"]', 'href', langUrl);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[property="og:url"]', 'content', url);
  setMeta('meta[property="og:locale"]', 'content', state.lang === 'fa' ? 'fa_IR' : state.lang === 'it' ? 'it_IT' : 'en_US');
}

/* Course/FAQ structured data is intentionally static in index.html.
   Runtime injection is avoided because lesson code examples may contain
   literal script-like markup that search renderers can parse incorrectly. */

/* ---------------- BOOT ---------------- */
document.addEventListener('DOMContentLoaded', function(){
  $('#year').textContent = new Date().getFullYear();
  initLoader();
  initTheme();
  initNavFit();
  initDropdowns();
  initDrawer();
  initLang();        // renders translated lightweight shells
  initLazyCourses(); // hydrates the heavy course DOM only near #courses
  initScrollMotion();// direction-aware side motion: FAQ · social · form (no GSAP)

  /* courses: pick the starting tab / session from the URL hash, if any */
  var hid = (location.hash || '').replace('#', '');
  var hashCourse = findCourse(hid);
  if (hashCourse){
    COURSE_STATE.tab = hashCourse.tab;
    renderCourses();
    applyCourseHash(800);             // wait for the loader so the session sits at the top
  } else {
    var h = hid.toLowerCase();
    if (h === 'premium' || h.indexOf('premium') > -1) COURSE_STATE.tab = 'premium';
    else if (h === 'components') COURSE_STATE.tab = 'components';
    renderCourses();
    updateSeo();
  }
  window.addEventListener('hashchange', function(){ applyCourseHash(60); });
  initCourseUI();
  initForm();
  initScroll();
  initSmoothAnchors();

  function later(fn, delay){
    if (window.requestIdleCallback) requestIdleCallback(fn, { timeout: delay || 800 });
    else setTimeout(fn, delay || 120);
  }
  /* Restore the lightweight circular cursor. The costly full-page glow and
     mouse-background effects remain disabled for responsive scrolling. */
  later(function(){
    initCursor();
    initRipple();
  }, 180);
  /* Optional GSAP motion is intentionally not started: it previously loaded
     after a delay and replayed visible content, which looked like a second
     page load. The lightweight CSS motion remains available. */
});
})();