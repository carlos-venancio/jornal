# RESUMO DA API NEWSDATA

[NEWSDATA](https://newsdata.io) é uma API de notícias que fornece acesso a artigos de notícias de todo o mundo. A API permite pesquisar artigos de notícias com base em palavras-chave, frases, intervalo de datas, idioma, localização, editora e outros critérios.

A api utiliza chaves para fazer o controle do número de usuários. Para obter uma chave é necessário fazer uma conta no site: <https://newsdata.io/register>. Encontramos a chave no painel do usuario, dentro da aba chave api.

As contas possui níveis, chamados de assinatura, e representam a liberdade do usuário dentro do sistema. Assim que criamos uma conta obtemos uma assinatura livre que possui um **limite de 200 requisições por dia**, cada requisição **contendo 10 artigos**, independente da categoria, contendo um limite de requisições durante um período de tempo. No caso da assinatura livre, é 30 requisições que podem ser feitas no máximo de 15 minutos. Além disso, é liberado apenas um endpoint: o Latest News (referido como "news").

## Parâmetros Utilizados

Parâmetro     |  Descrição
-----------   |  ------------
apikey        |  Você precisa adicionar sua chave de API ao acessar a API de dados de notícias
country       |  Pesquise os artigos de um país específico. Você pode adicionar até 5 países em uma única consulta. Porém continua o limite de 10 artigos
category      |  Pesquise os artigos de notícias para uma categoria específica. Você pode adicionar até 5 categorias em uma única consulta. Porém continua o limite de 10 artigos
image         |  Pesquise os artigos com imagem em destaque ou sem imagem em destaque. Use 1 para artigos com imagem em destaque e 0 para artigos sem imagem em destaque.
full_content  |  Pesquise os artigos com conteúdo completo ou sem conteúdo completo. Use "1" para artigos de notícias que contêm o objeto de resposta full_content e "0" para artigos de notícias que não contêm o objeto de resposta full_content.


## Exemplo de retorno

~~~js
GET https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=au,us
~~~

~~~js
{
  "status": "success",
  "totalResults": 8132,
  -"results": [
  -{
  "article_id": "bacb1324366b7316aba577ea0ff2bd13",
  "title": "Von Boateng bis Mustafi: Diese deutschen Nationalspieler sind vereinslos",
  "link": "https://www.maz-online.de/sport/von-boateng-bis-mustafi-diese-deutschen-nationalspieler-sind-vereinslos-L6CG7E5P3REHBKJBRMM2HBCBPA.html",
  "keywords": null,
  -"creator": [
  "Maximilian Bohne"
  ],
  "video_url": null,
  "description": "Während die meisten europäischen Transferfenster bereits geschlossen haben, sind einige (ehemalige) Topspieler noch immer vereinslos. Der Sportbuzzer gibt einen Überblick über den aktuellen Stand bei acht ehemaligen deutschen Nationalspielern, die noch immer auf Klubsuche sind.",
  "content": "Jerome Boateng (li.) und Shkodran Mustafi sind derzeit vereinslos. © Quelle: imago images/ActionPictures/Sports Press Photo/ZUMA Wire (Montage) Während die meisten europäischen Transferfenster bereits geschlossen haben, sind einige (ehemalige) Topspieler noch immer vereinslos. Der Sportbuzzer gibt einen Überblick über den aktuellen Stand bei acht ehemaligen deutschen Nationalspielern, die noch immer auf Klubsuche sind. Eröffnen sich nach neue Optionen für Jerome Boateng, Shkodran Mustafi und Co.? Gleich acht deutsche Nationalspieler, darunter zwei Weltmeister von 2014, sind auch nach dem Ende der Transferperiode in den meisten europäischen Ländern noch immer ohne Verein. Die gute Nachricht: Vereinslose Spieler können auch zwischen den Transferfenstern bei neuen Arbeitgebern anheuern - und sich somit vielleicht auch für als Kandidaten für die DFB-Elf ins Spiel bringen. Der Sportbuzzer zeigt, welche früheren DFB-Kicker derzeit auf eine neue Aufgabe hoffen. Nach zwei Jahren bei Olympique Lyon ist Jerome Boateng seit diesem Sommer vereinslos. Bei den Franzosen nahm er allerdings ohnehin nur eine sportliche Nebenrolle ein. Ans Aufhören denkt der langjährige Abwehrchef des FC Bayern München und der Nationalmannschaft deswegen aber noch lange nicht, das ließ er bereits Anfang des Jahres verlauten. Er wolle noch einmal topfit angreifen, hieß es damals. Einen Verein für sein Vorhaben hat Boateng aber bislang nicht gefunden. Schlagzeilen um seine Person drehen sich derzeit vor allem um seinen anstehenden dritten Gerichts-Prozess, nachdem der 35-Jährige 2022 zu 1,2 Millionen Euro Strafe wegen verurteilt worden war. Beim VfB Stuttgart, der TSG Hoffenheim, dem FC Schalke 04 und für eine Saison sogar dem FC Bayern München gehörte Sebastian Rudy in den letzten 15 Jahren fest zum Bundesliga-Inventar. Die meiste Zeit verbrachte der defensive Mittelfeldspieler bei Hoffenheim, dort ist er sogar Rekordfeldspieler des Vereins. “Ich bin jetzt in einer Phase meiner Karriere angekommen, in der ich mir genau überlegen möchte, wie es fußballerisch für mich weitergehen könnte”, sagte der WM-Teilnehmer von 2018, nachdem er die TSG im Sommer dieses Jahres verließ. “Vielleicht ergibt sich noch einmal ein weiterer Schritt. Ich habe jedenfalls noch Lust zu kicken und bin offen für Neues.” Mehr zum Thema Ob in der Serie A für Sampdoria Genua, in der La Liga für den FC Valencia oder in der Premier League für den FC Arsenal. Bis 2021 hielt sich Shkodran Mustafi kontinuierlich auf den größten Bühnen des Weltfußballs. War mit einer Ablösesumme von 41 Millionen Euro (2016 von Valencia zu Arsenal) seiner Zeit einer der teuersten deutschen Profis. Mit der deutschen Nationalmannschaft wurde er 2014 Weltmeister, auch bei der EM 2016 war er dabei. Seit 2021 ist seine Karriere allerdings ins Stocken geraten. Nach einem halbjährigen Ausflug zum FC Schalke war Mustafi einige Zeit vereinslos, ehe er beim spanischen Klub UD Levante anheuerte. Dort lief in diesem Sommer sein Arbeitspapier aus, die abgelaufene Saison verbrachte der Innenverteidiger mit mit einer Muskelverletzung zu weiten Teilen auf der Tribüne. Jetzt ist der 31-Jährige zwar wieder fit - bislang aber noch ohne Klub. Ein Karriereende steht für Mustafi noch nicht zur Diskussion, sehr wohl aber . “Wenn ich nach Saudi-Arabien gehen sollte, dann nicht, um Titel zu gewinnen oder ein Projekt zu starten, sondern wegen des Geldes – da müssen wir uns nichts vormachen”, sagte Mustafi jüngst im -Interview. Als Nico Schulz 2019 für mehr als 25 Millionen Euro von der TSG Hoffenheim zu Borussia Dortmund wechselte, war er einer der gefragtesten Außenverteidiger Deutschlands. Nur vier Jahre später ist der Glanz verflogen und die Zeit von Schulz in Dortmund gemeinhin als “Missverständnis” bekannt. Schon in der vergangenen Saison spielte Schulz in den Plänen von Edin Terzic keine Rolle mehr und stand nicht mehr im Kader des Vizemeisters. In diesem Sommer - für eine Abfindungszahlung in Höhe von 2,5 Millionen Euro. “Wir sprechen gerade mit anderen Klubs, damit wir für den Spieler die beste Lösung finden”, hatte sein Berater Roger Wittmann im Gespräch mit den erklärt. Stand September ist Schulz allerdings immer noch vereinslos. Im Sommer nach zwölf Jahren. Die Werkself-Legende kam schon in der letzten Saison kaum noch zum Zug und absolvierte nur wenige Spielminuten - auch wegen viel Verletzungspech. “Bayer 04 ist mir so ans Herz gewachsen, dass mir dieser wohlüberlegte Schritt dennoch sehr, sehr weh tut”, sagte Bellarabi zum Abschied. Doch was kommt jetzt? Mit 33 Jahren steht der Rechtsaußen, der nach der Weltmeisterschaft 2014 in die Nationalmannschaft drängte, keineswegs automatisch vor dem Karriereende. Eins ist klar: Gegen seine alte Liebe Leverkusen will er nicht antreten müssen. “Wenn sein Körper mitspielt und er noch interessante Angebote bekommt, erwägt Bellarabi die Fortsetzung seiner Karriere im außereuropäischen Ausland”, hieß es in der Abschiedsmitteilung des Klubs. Über den Sommer fand sich bislang aber wohl kein solches Angebot. Mehr zum Thema Er galt eins als eines der vielversprechendsten Talente des deutschen Fußballs - heute ist Amin Younes eher als Skandalspieler bekannt. Nach seinem Durchbruch auf die internationale Fußballbühne bei Ajax Amsterdam im Jahr 2015 entwickelte sich die Karriere des heute 30-Jährigen in die falsche Richtung. Nach mehreren Disziplinlosigkeiten und Suspendierungen wechselte der Confed-CupSieger Anfang 2022 nach Saudi-Arabien. Doch weder dort noch mit einer Leihsaison beim FC Utrecht, die im Sommer endete, fand Younes den Weg zurück in die Spur. Seinen Vertrag bei Al-Ettifaq löste er im Juli in “freundschaftlichem Einvernehmen” auf. “Ich habe mich dazu entschieden, ab sofort wieder nach einem neuen Abenteuer zu suchen”, ließ Younes verlauten. Derzeit . 2018 stand Marvin Plattenhardt für die deutsche Nationalmannschaft bei der Weltmeisterschaft in Russland auf dem Platz. In der vergangenen Saison führte er seinen Herzensklub Hertha BSC sogar noch als Kapitän aufs Feld. Doch nach dem Abstieg der Alten Dame in die zweite Bundesliga endete die Zeit des Linksverteidigers bei der Hertha nach neun Jahren. Seitdem sucht der 31-Jährige einen neuen Klub. Der wollte sich über den Sommer einfach nicht finden. Bis Plattenhardt seine Schuhe für einen neuen Verein schnüren darf, hält der Linksfuß sich mit Konditionseinheiten beim Brandenburger Oberligisten Eintracht Stahnsdorf fit. Wegen eines Knorpelschadens stand André Hahn seit Oktober 2022 nicht mehr auf dem Fußballplatz. Bis zum Sommer stand der 33-Jährige noch beim FC Augsburg unter Vertrag. Beim selben Verein, wo vor zehn Jahren seine Bundesliga-Karriere begann - doch jetzt entschieden sich die Fuggerstädter gegen eine Vertragsverlängerung. “Nach meiner Knieverletzung geht es aktuell für mich darum, alles dafür zu tun, wieder auf den Platz zurückzukehren”, kündigte Hahn im Anschluss an. Einen neuen Arbeitgeber hat der Stürmer, der im Mai 2014 gegen Polen zu seinem einzigen Einsatz in der Nationalmannschaft kam, aber noch immer nicht gefunden.",
  "pubDate": "2023-09-12 06:31:00",
  "image_url": "https://www.maz-online.de/resizer/Qr62OSrNncMiPUu_wXJr-Wld8Cg=/596x0/filters:quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/3RQZVQJSJFB6ZDNR73LQHBKCHQ.jpg",
  "source_id": "maz_online",
  "source_priority": 17076827,
  -"country": [
  "germany"
  ],
  -"category": [
  "sports"
  ],
  "language": "german"
  },
...
~~~
