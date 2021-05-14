<template>
      <div class="container my-5">
        <MainTitle title="Prawa pacjenta" />
        <LineAfterTitle />
        <RightsContent :rights="rights" />
      </div>

</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import RightsContent from '@/components/patient-components/rights-components/RightsContent'

export default {
    name: "Home",
    components: {
        MainTitle,
        LineAfterTitle,
        RightsContent
    },

    data() {
        return {
            rights: []
        }
    },

    created() {
        this.rights = [ 
            {
                id: 1,
                rightTitle: "Masz prawo do bezpłatnych świadczeń opieki zdrowotnej",
                content: `<p>
                                    Masz prawo do równego dostępu do świadczeń opieki zdrowotnej finansowanych ze środków publicznych. Sposób udzielania Ci pomocy medycznej i procedury z tym związane muszą odpowiadać wymaganiom aktualnej wiedzy medycznej. Jeżeli istnieją ograniczenia w możliwości udzielania odpowiednich świadczeń, masz prawo do przejrzystej, obiektywnej, opartej na kryteriach medycznych procedury ustalającej kolejność dostępu do tych świadczeń (tzw. kolejki). <strong>Każdy, kto ma prawo do świadczeń opieki zdrowotnej, otrzymuje pomoc medyczną na takim samym poziomie.</strong>
                                </p>
                                
                                <p>
                                    <strong>
                                        Masz prawo do natychmiastowego otrzymania pomocy medycznej, bez skierowania, w stanie nagłym – jeśli jest zagrożone Twoje zdrowie lub życie.
                                    </strong> W stanach nagłych masz prawo skorzystać z pomocy lekarza, który nie jest lekarzem ubezpieczenia zdrowotnego, w zakresie niezbędnych świadczeń opieki zdrowotnej. Prawo do natychmiastowej pomocy medycznej, bez skierowania, ma także kobieta w czasie porodu.
                                </p>

                                <p>
                                    Możesz żądać, aby lekarz udzielający Ci świadczeń zdrowotnych zasięgnął opinii innego lekarza lub zwołał konsylium lekarskie. Lekarz może odmówić zasięgnięcia opinii innego lekarza, jeżeli uzna to za bezzasadne. Pamiętaj, że w takiej sytuacji Twoje żądanie oraz odmowa lekarza powinny zostać odnotowane w dokumentacji medycznej, do której masz dostęp.
                                </p>

                                <p class='mb-0'>
                                    Dotyczy to również świadczeń zdrowotnych udzielanych przez pielęgniarkę lub położną.
                                </p>`
            },

            {
                id: 2,
                rightTitle: "Masz prawo do wyczerpującej i zrozumiałej informacji o swoim stanie zdrowia",
                content: `<p>
                            Jeżeli ukończyłeś 16 lat, masz prawo uzyskać od lekarza przystępną informację o Twoim stanie zdrowia, rozpoznaniu, proponowanych oraz możliwych metodach diagnostycznych i leczniczych oraz dających się przewidzieć następstwach (dla Twojego zdrowia i życia) zastosowania albo zaniechania określonych czynności medycznych. Jeżeli jesteś w wieku 16 – 18 lat, tę informację ma prawo uzyskać także Twój przedstawiciel ustawowy (np. rodzic).
                          </p>

                          <p>
                            Lekarz powinien Ci dokładnie wyjaśnić, na czym będą polegały przeprowadzane zabiegi i badania oraz w jakim celu będziesz przyjmował dany lek. Masz prawo do informacji o wynikach przeprowadzonych badań. Jeśli za dane świadczenie musiałbyś częściowo lub w całości zapłacić, lekarz powinien to wyraźnie zaznaczyć. Przysługuje Ci również prawo do uzyskania od pielęgniarki lub położnej przystępnej informacji o pielęgnacji i zabiegach pielęgniarskich (położniczych).
                          </p>

                          <p>
                            Po uzyskaniu informacji o swoim stanie zdrowia, możesz przedstawić lekarzowi swoje zdanie na ten temat. Jeżeli masz powody sądzić, że lekarz nie przekazał Ci wszystkich informacji o Twoim stanie zdrowia i o niepomyślnym rokowaniu, masz prawo żądać, aby udzielono Ci pełnych informacji.
                          </p>

                          <p>
                              <strong>Pamiętaj, możesz pytać o wszystko, co Cię niepokoi oraz do momentu, aż przekazywana informacja będzie dla Ciebie zrozumiała.</strong>
                          </p>

                          <p>
                            <strong>Jeżeli nie chcesz być informowany o swoim stanie zdrowia, masz prawo zrezygnować z tych informacji – ze wskazaniem, czy rezygnujesz ze wszystkich informacji, czy tylko z niektórych.</strong>
                        </p>

                        <p>
                            Lekarz może nie podjąć lub odstąpić od leczenia, o ile nie zachodzi przypadek niecierpiący zwłoki, a brak udzielenia pomocy medycznej nie stanowi dla Ciebie niebezpieczeństwa: utraty życia, ciężkiego uszkodzenia ciała, ciężkiego rozstroju zdrowia oraz innego przypadku niecierpiącego zwłoki. Odstąpienie od leczenia nie może być dla Ciebie zaskoczeniem. Powinieneś zostać poinformowany o tym odpowiednio wcześniej. Masz prawo uzyskać informację i wskazanie, u jakiego innego lekarza lub w jakim innym szpitalu czy przychodni masz realną możliwość kontynuowania leczenia.
                        </p>

                        <p>
                            Pamiętaj, że Ty decydujesz, komu i jakie informacje o Twoim zdrowiu mogą być przekazywane. Możesz wyrazić zgodę na udzielanie tych informacji innym osobom (rodzinie, znajomym, mediom), możesz również nie upoważnić do tego nikogo.
                        </p>

                        <p>
                            Masz prawo zobowiązać szpital (oraz każdy inny podmiot udzielający Ci świadczenia zdrowotnego) do poinformowania osób bliskich lub wskazanych instytucji o śmierci lub zagrożeniu życia wynikającego z Twojego stanu zdrowia. Możesz udzielić takiego upoważnienia już w chwili przyjęcia do szpitala lub w trakcie pobytu. Szpital ma obowiązek wypełnić życzenie pacjenta niezwłocznie i skutecznie.
                        </p>

                        <p>
                            <ul class="p-0">
                                <strong>Upoważnienie powinno zawierać:</strong>
                            </ul>
                            <li>miejscowość i datę,</li>
                            <li>Twoje dane (imię i nazwisko, adres zamieszkania, numer PESEL),</li>
                            <li>dane osoby upoważnionej (imię i nazwisko, adres zamieszkania, nr dowodu tożsamości),</li>
                            <li>Twój wyraźny podpis.</li>
                        </p>`
            },
            {
                id: 3,
                rightTitle: "Masz prawo do wyrażenia zgody na udzielenie świadczeń zdrowotnych",
                content: `<p>
                                Po otrzymaniu od lekarza wyczerpującej i zrozumiałej informacji o Twoim stanie zdrowia, jeśli ukończyłeś 16 lat, masz prawo wyrazić zgodę na przeprowadzenie badania. Pamiętaj, zawsze możesz się nie zgodzić na dane świadczenie zdrowotne lub zażądać zaprzestania jego udzielania. Wyrażasz oddzielną zgodę na pobyt w szpitalu oraz na wszystkie inne badania i świadczenia medyczne. Zgoda może być ustna, pisemna albo wyrażona poprzez takie zachowanie, które nie budzi wątpliwości co do podjętej decyzji. <strong>Pisemna zgoda jest wymagana w przypadku zabiegu operacyjnego albo zastosowania metody leczenia lub diagnostyki stwarzających podwyższone ryzyko mające wpływ na stan Twojego zdrowia lub na Twoje życie.</strong>
                            </p>

                            <p>
                                Jeśli masz 16 – 18 lat i nie zgadzasz się na udzielenie Ci świadczenia zdrowotnego, a Twój przedstawiciel ustawowy (np. rodzic) ma odmienne zdanie, decyzję podejmuje sąd opiekuńczy.
                            </p>`
            },
            {
                id: 4,
                rightTitle: "Masz prawo do poszanowania Twojego życia prywatnego i rodzinnego",
                content: `<p>
                                W trakcie pobytu w stacjonarnym podmiocie leczniczym (np. w szpitalu, zakładzie opiekuńczo-leczniczym, zakładzie pielęgnacyjno-opiekuńczym, zakładzie rehabilitacji leczniczej, sanatorium) masz prawo do kontaktu osobistego, telefonicznego lub korespondencyjnego z innymi osobami. Przysługuje Ci również prawo do odmowy takiego kontaktu. Placówka nie może w żaden sposób utrudniać Ci kontaktu, natomiast powinna określić czas i miejsce spotkań oraz możliwość kontaktu telefonicznego czy listowego.
                            </p>

                            <p>
                                Masz prawo do dodatkowej opieki pielęgnacyjnej ze strony osób przez Ciebie wskazanych. Dodatkowa opieka pielęgnacyjna polega również na sprawowaniu opieki nad pacjentką
                                w okresie ciąży, porodu i połogu. Jeśli skorzystasz z tego prawa, personel medyczny nie może wyręczać się rodziną czy bliskimi osobami w opiece nad chorym, nadal ma obowiązek nadzoru nad prawidłową opieką nad Tobą i troski o nią. Warto wcześniej ustalić, jaką opiekę pielęgnacyjną będzie wykonywała osoba przez Ciebie wskazana, a jaką personel medyczny.
                            </p>

                            <p>
                                <strong>Pamiętaj, że to Ty ponosisz ewentualne koszty wynikające z korzystania z prawa do kontaktu osobistego, telefonicznego lub korespondencyjnego oraz do dodatkowej opieki. Informacja o wysokości opłat oraz sposobie jej ustalania jest jawna i musi być udostępniona w podmiocie, w którym się leczysz. Korzystanie z prawa pacjenta do kontaktu osobistego, telefonicznego lub korespondencyjnego może być ograniczone ze względu na możliwości organizacyjne podmiotu.</strong>
                            </p>`
            },
            {
                id: 5,
                rightTitle: "Masz prawo do zgłoszenia sprzeciwu wobec opinii albo orzeczenia lekarza",
                content: `<p>
                                <strong>Masz prawo (lub w Twoim imieniu Twój przedstawiciel ustawowy) wnieść sprzeciw wobec opinii albo orzeczenia, które wydaje lekarz o Twoim stanie zdrowia,jeśli opinia albo orzeczenie ma wpływ na Twoje prawa lub obowiązki wynikające z przepisów prawa.</strong> Sprzeciw wymaga uzasadnienia, w tym wskazania odpowiedniego przepisu, z którego wynikają prawa lub obowiązki. Sprzeciw wnosi się do Komisji Lekarskiej działającej przy Rzeczniku Praw Pacjenta, za pośrednictwem Rzecznika Praw Pacjenta, w terminie 30 dni od wydania opinii albo orzeczenia.
                            </p>
                            
                            <p>
                                <a href="https://www.gov.pl/web/rpp">Czytaj więcej na ten temat wniesienia sprzeciwu wobec opinii albo orzeczenia, które wydaje lekarz w serwisie Rzecznika Praw Pacjenta.</a>
                            </p>

                            <p>
                                <strong>Sprzeciwu wobec opinii albo orzeczenia lekarza nie można wnieść w przypadku, gdy postępowania odwoławcze od wydanych opinii i orzeczeń regulują odrębne przepisy (np. odwołanie od orzeczenia lekarza orzecznika ZUS).</strong>
                            </p>

                            <p>
                                Komisja Lekarska na podstawie dokumentacji medycznej oraz, w miarę potrzeby, po zbadaniu pacjenta, wydaje orzeczenie niezwłocznie, nie później niż w terminie 30 dni od wniesienia sprzeciwu. Od rozstrzygnięcia Komisji Lekarskiej nie przysługuje odwołanie.
                            </p>`
            },
            {
                id: 6,
                rightTitle: "Twoje prawa w szpitalu",
                content: `<p>
                                <ul>
                                    <li>Masz prawo do informacji o swoich prawach. Taka informacja powinna być umieszczona w miejscu ogólnodostępnym, a w przypadku pacjentów którzy nie mogą się poruszać – w pomieszczeniu, gdzie znajduje się pacjent.</li>
                                    <li>Masz prawo do informacji o rodzaju i zakresie świadczeń zdrowotnych udzielanych przez podmiot leczniczy, w tym o profilaktycznych programach zdrowotnych finansowanych ze środków publicznych, realizowanych przez ten podmiot.</li>
                                    <li>Masz prawo do leczenia szpitalnego na podstawie skierowania wystawionego przez lekarza (w tym lekarza, który nie jest lekarzem ubezpieczenia zdrowotnego). W stanach nagłych, masz prawo do natychmiastowej pomocy medycznej, bez skierowania.</li>
                                    <li>Masz prawo do bezpłatnych świadczeń opieki zdrowotnej. Masz prawo żądać, aby lekarz, który udziela Ci świadczeń zdrowotnych, zasięgnął opinii innego lekarza lub zwołał konsylium lekarskie. Lekarz może odmówić zasięgnięcia opinii innego lekarza, jeżeli uzna to za bezzasadne, a wspomniane żądanie oraz jego odmowa powinny zostać odnotowane w dokumentacji medycznej. Dotyczy to również świadczeń zdrowotnych udzielanych przez pielęgniarkę lub położną.</li>
                                    <li>Masz prawo do bezpłatnych środków farmaceutycznych i materiałów medycznych. Personel medyczny nie może prosić Cię o zaopatrzenie się w jakiekolwiek materiały medyczne podczas Twojego pobytu w szpitalu.</li>
                                    <li>Masz prawo do pomieszczenia oraz wyżywienia adekwatnych do Twojego stanu zdrowia.</li>
                                    <li>Masz prawo do bezpłatnego transportu sanitarnego (w tym lotniczego) do najbliższego podmiotu, z którym NFZ zawarł umowę o udzielanie świadczeń opieki zdrowotnej, oraz z powrotem, na zlecenie lekarza ubezpieczenia zdrowotnego. Transport sanitarny przysługuje Ci w sytuacji natychmiastowej konieczności leczenia w placówce medycznej, w celu zachowania ciągłości leczenia oraz gdy masz schorzenia narządu ruchu, które uniemożliwiają korzystanie z transportu publicznego.</li>
                                    <li>Masz prawo do poszanowania godności i intymności.
                                        W trakcie udzielania Ci pomocy medycznej powinny być obecne tylko te osoby, które są niezbędne ze względu na rodzaj świadczenia. Uczestnictwo innych osób (w tym osób wykonujących zawód medyczny oraz studentów uczelni medycznych) wymaga zgody pacjenta i lekarza, który udziela świadczenia medycznego. W klinikach oraz w szpitalach uczelni medycznych studenci często są obecni przy badaniach oraz zabiegach medycznych, by obserwować ich przebieg. Lekarz jednak musi zadbać o to, aby liczba studentów i ich zachowanie nie naruszały Twojego prawa do intymności. Pamiętaj, zawsze możesz prosić o udzielenie świadczenia bez obecności studentów.
                                        Lekarz nie powinien omawiać Twojej choroby i zadawać Ci intymnych pytań w obecności innych pacjentów. Prawo do poszanowania godności obejmuje także prawo do umierania w spokoju i godności. Jeżeli znajdujesz się w stanie terminalnym, masz prawo do świadczeń zdrowotnych zapewniających łagodzenie bólu i zminimalizowania cierpień innego typu.</li>
                                    <li>Masz prawo do wyczerpującej i zrozumiałej informacji o swoim stanie zdrowia.</li>
                                    <li>Masz prawo do zachowania tajemnicy informacji na Twój temat.</li>
                                    <li>Możesz wypisać się ze szpitala na własne żądanie. Wcześniej jednak lekarz ma obowiązek w jasny sposób poinformować Cię o przewidzianych konsekwencjach dla Twojego zdrowia i życia, związanych z zaprzestaniem leczenia szpitalnego.</li>
                                    <li>Masz prawo wyrazić zgodę na udzielenie świadczeń zdrowotnych.</li>
                                    <li>Masz prawo dostępu do dokumentacji medycznej dotyczącej Twojego stanu zdrowia oraz udzielonych świadczeń zdrowotnych. Po zakończonym leczeniu szpitalnym powinieneś otrzymać kartę informacyjną dotyczącą rozpoznania choroby, wyników badań, zastosowanego leczenia, terminów wykonanych zabiegów, dalszych wskazań, czasu zwolnienia od pracy, adnotacji o zapisanych lekach oraz terminach planowanych konsultacji.</li>
                                    <li>Masz prawo do poszanowania Twojego życia prywatnego i rodzinnego. Masz prawo do dodatkowej opieki pielęgnacyjnej ze strony osób przez Ciebie wskazanych. Dodatkowa opieka pielęgnacyjna polega również na sprawowaniu opieki nad pacjentką w okresie ciąży, porodu i połogu. Jeśli skorzystasz z tej możliwości, personel medyczny nie może wyręczać się rodziną czy bliskimi osobami w opiece nad chorym, nadal ma obowiązek nadzoru nad prawidłową opieką nad Tobą i troski o nią. Warto wcześniej ustalić, jaką opiekę pielęgnacyjną będzie wykonywała osoba przez Ciebie wskazana, a jaką personel medyczny. Ty ponosisz ewentualne koszty wynikające z korzystania z prawa do dodatkowej opieki. Informacja o wysokości opłat oraz sposobie jej ustalania jest jawna i musi być udostępniona w danym zakładzie.</li>
                                    <li>Masz prawo do opieki duszpasterskiej.</li>
                                    <li>Masz prawo zgłosić sprzeciw wobec opinii albo orzeczenia lekarza.</li>
                                    <li>Masz prawo do dochodzenia swoich praw.</li>
                                    <li>
                                        Masz prawo nie zgodzić się być dawcą organów lub tkanek po swojej śmierci. Jeżeli nie chcesz być dawcą organów lub tkanek po śmierci, musisz za życia wyrazić sprzeciw poprzez:
                                        <ol class="p">
                                            <li>wpis w centralnym rejestrze zgłoszonych sprzeciwów;</li>
                                            <li>oświadczenie pisemne z własnoręcznym podpisem;</li>
                                            <li>oświadczenie ustne złożone w obecności co najmniej dwóch świadków,
                                                pisemnie przez nich potwierdzone.</li>
                                        </ol>
                                        W przypadku małoletniego, który nie ukończył 16 lat lub osoby całkowicie ubezwłasnowolnionej, sprzeciw może wyrazić za ich życia przedstawiciel ustawowy. W przypadku małoletniego, który ukończył 16 lat, sprzeciw może wyrazić również sam małoletni.
                                    </li>
                                    <li>Masz prawo nie zgodzić się na przeprowadzenie sekcji zwłok po swojej śmierci. Sprzeciw może złożyć również przedstawiciel ustawowy pacjenta małoletniego lub osoby ubezwłasnowolnionej. Pisemny sprzeciw powinien zawierać: Twoje dane; datę i miejsce sporządzenia pisma; oświadczenie woli (że po śmierci wyrażasz sprzeciw wobec sekcji zwłok) oraz własnoręczny, czytelny podpis. Sprzeciw należy przekazać lekarzowi prowadzącemu do dokumentacji medycznej prowadzonej w szpitalu.</li>
                                </ul>
                            </p>`
            },
            {
                id: 7,
                rightTitle: "Masz prawo do zgłaszania niepożądanych działań produktów leczniczych",
                content: `<p>
                                Możesz (lub Twój przedstawiciel ustawowy albo opiekun faktyczny) zgłosić niepożądane działania produktów leczniczych osobom, które wykonują zawód medyczny, prezesowi Urzędu Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych lub podmiotowi odpowiedzialnemu za wprowadzenie produktu leczniczego do obrotu.
                            </p>`
            },
            {
                id: 8,
                rightTitle: "Masz prawo do poszanowania godności i intymności",
                content: `<p>
                                Masz prawo do poszanowania godności i intymności podczas otrzymywania świadczeń zdrowotnych. W związku z tym w trakcie udzielania pomocy medycznej powinny być obecne tylko te osoby, które są niezbędne ze względu na rodzaj świadczenia. <strong>Uczestnictwo innych osób, w tym osób wykonujących zawód medyczny oraz studentów uczelni medycznych, wymaga Twojej zgody i zgody lekarza, który udziela świadczenia.</strong>
                            </p>

                            <p>
                                Masz prawo przygotować się do badania lub zabiegu w osobnym, osłoniętym miejscu, tak aby nie można było Cię oglądać ani podsłuchać. Jeżeli jesteś unieruchomiony w łóżku lub obłożnie chory i przebywasz w sali wieloosobowej, masz prawo oczekiwać, że badanie lub zabieg będą przeprowadzone z poszanowaniem intymności i godności – za parawanem lub zasłonką. <strong>Lekarz nie powinien omawiać Twojej choroby i zadawać Ci intymnych pytań w obecności innych pacjentów.</strong>
                            </p>

                            <p><strong>
                                Prawo do poszanowania godności obejmuje także prawo do godnego umierania. Jeżeli znajdujesz się w stanie terminalnym, masz prawo do świadczeń zdrowotnych zapewniających łagodzenie bólu i zminimalizowanie cierpienia innego typu.
                            </strong></p>

                            <p>
                                <strong>Przy udzielaniu świadczeń zdrowotnych może być obecna bliska Ci osoba. </strong> Lekarz ma prawo nie zgodzić się na obecność osoby bliskiej, jeśli istnieje prawdopodobieństwo wystąpienia zagrożenia epidemicznego lub ze względu na Twoje bezpieczeństwo zdrowotne. Tę odmowę odnotowuje się w dokumentacji medycznej.
                            </p>`
            },
            {
                id: 9,
                rightTitle: "Masz prawo do zachowania tajemnicy informacji na Twój temat",
                content: `<p>
                                Masz prawo do ochrony danych i utrzymania w tajemnicy informacji na Twój temat uzyskanych przez osoby wykonujące zawód medyczny (np. lekarzy) w związku z udzielaniem Ci świadczeń zdrowotnych. Tajemnica lekarska obejmuje wszelkie informacje dotyczące stanu zdrowia, rozpoznania i przebiegu leczenia, jak również życia prywatnego, rodzinnego i zawodowego.
                            </p>

                            <p>
                                Informacje te muszą być traktowane jako poufne i nie mogą być ujawniane osobom nieupoważnionym również po Twojej śmierci. Osoby wykonujące zawód medyczny są zobowiązane do ujawnienia informacji, gdy tajemnica lekarska może powodować niebezpieczeństwo dla zdrowia i życia Twojego i innych osób.
                            </p>`
            },
            {
                id: 10,
                rightTitle: "Masz prawo do dostępu do dokumentacji medycznej dotyczącej Twojego stanu zdrowia oraz udzielonych świadczeń zdrowotnych",
                content: ` <p>
                                Podmiot udzielający świadczeń zdrowotnych (np. szpital, poradnia, prywatna placówka) ma obowiązek udostępnić Twoją dokumentację medyczną Tobie, Twojemu przedstawicielowi ustawowemu lub osobie upoważnionej przez Ciebie. Po Twojej śmierci prawo wglądu w dokumentację medyczną ma osoba, którą upoważniłeś za życia.
                            </p>

                            <p>
                                <strong>Upoważnienie powinno zawierać:</strong>
                                <ul>
                                    <li>miejscowość i datę,</li>
                                    <li>Twoje dane (imię i nazwisko, adres zamieszkania, numer PESEL),</li>
                                    <li>dane osoby upoważnionej (imię i nazwisko, adres zamieszkania, nr dowodu tożsamości),</li>
                                    <li>Twój wyraźny podpis.</li>
                                </ul>
                            </p>

                            <p>
                                Dokumentacja medyczna może być udostępniona do wglądu (bezpłatnie, w siedzibie podmiotu, w którym się leczysz lub leczyłeś), poprzez sporządzenie jej wyciągów, kopii lub odpisów (za opłatą) lub poprzez wydanie oryginału za pokwitowaniem odbioru (z zastrzeżeniem zwrotu po wykorzystaniu). Lekarz ma obowiązek wyjaśnić Ci treść dokumentacji medycznej zrozumiały i wyczerpujący w sposób.
                            </p>
                            <p>
                                Po zakończonym leczeniu szpitalnym powinieneś otrzymać kartę informacyjną dotyczącą rozpoznania choroby, wyników badań, zastosowanego leczenia, terminów wykonanych zabiegów, dalszych wskazań, czasu zwolnienia od pracy, adnotacji o zapisanych lekach oraz terminach planowanych konsultacji.
                            </p>
                            <p>
                                Podmiot udzielający świadczeń zdrowotnych przechowuje dokumentację medyczną przez <strong>20 lat</strong>, licząc od końca roku kalendarzowego, w którym dokonano ostatniego wpisu.
                            </p>
                            <p>
                                <a href="https://dziennikustaw.gov.pl/du/2012/159">Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 24 stycznia 2012 r. w sprawie ogłoszenia jednolitego tekstu ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta.</a>
                            </p>`
            },
            {
                id: 11,
                rightTitle: "Masz prawo do opieki duszpasterskiej",
                content: `<p>
                                Jeśli Twój stan zdrowia się pogarsza lub Twoje życie jest zagrożone, stacjonarny podmiot leczniczy (np. szpital, zakład opiekuńczo-leczniczy, zakład pielęgnacyjno-opiekuńczy, zakład rehabilitacji leczniczej, sanatorium) ma obowiązek umożliwić Ci kontakt z duchownym Twojego wyznania. Koszty związane z realizacją tego prawa ponosi podmiot leczniczy.
                            </p>`
            },
            {
                id: 12,
                rightTitle: "Twoje prawa w przychodni, ośrodku zdrowia, poradni, ambulatorium, aptece",
                content: `<p>
                                <ul>
                                    <li>Masz prawo do informacji o swoich prawach. Taka informacja powinna być umieszczona w miejscu ogólnodostępnym, a w przypadku pacjentów którzy nie mogą się poruszać i przebywają w stacjonarnym podmiocie leczniczym (np. szpitalu, zakładzie opiekuńczo-leczniczym, pielęgnacyjno-opiekuńczym, rehabilitacji leczniczej, sanatorium) – w pomieszczeniu, gdzie znajduje się pacjent.</li>
                                    <li>Masz prawo do informacji o rodzaju i zakresie świadczeń zdrowotnych udzielanych przez podmiot leczniczy, w tym o profilaktycznych programach zdrowotnych finansowanych ze środków publicznych, realizowanych przez ten podmiot.</li>
                                    <li>Masz prawo wybrać lekarza ubezpieczenia zdrowotnego pierwszego kontaktu (lekarz podstawowej opieki zdrowotnej). Może być nim lekarz rodzinny, internista lub pediatra (w przypadku dzieci). W ciągu roku kalendarzowego możesz trzykrotnie i bezpłatnie zmienić swoją decyzję.</li>
                                    <li>Masz prawo wybrać pielęgniarkę i położną ubezpieczenia zdrowotnego (pielęgniarkę/położną podstawowej opieki zdrowotnej). W ciągu roku kalendarzowego możesz trzykrotnie i bezpłatnie zmienić swoją decyzję.</li>
                                    <li>W ramach podstawowej opieki zdrowotnej masz prawo do badania oraz porady lekarskiej bez skierowania, w tym do nocnej (od 18:00 do 8:00) oraz świątecznej opieki lekarskiej i pielęgniarskiej, udzielanej w formie ambulatoryjnej i wyjazdowej.</li>
                                    <li>Masz prawo zarejestrować się do lekarza osobiście, przez osoby trzecie lub telefonicznie.</li>
                                    <li>Jeśli wybrany przez Ciebie lekarz jest nieobecny, musisz zostać przyjęty przez innego lekarza.</li>
                                    <li>Bez skierowania, masz prawo do ambulatoryjnych świadczeń specjalistycznych udzielanych przez: ginekologa i położnika, dentystę, wenerologa, onkologa oraz psychiatrę.</li>
                                    <li>Masz prawo do ambulatoryjnych świadczeń specjalistycznych bez skierowania, gdy chorujesz na gruźlicę, gdy jesteś zakażony wirusem HIV, jesteś inwalidą wojennym i wojskowym, kombatantem, osobą represjonowaną lub cywilną niewidomą ofiarą działań wojennych.</li>
                                    <li>Masz prawo do leczenia urazów lub chorób nabytych podczas wykonywania zadań poza granicami państwa bez skierowania, gdy jesteś weteranem poszkodowanym.</li>
                                    <li>Masz prawo do leczenia odwykowego bez skierowania, gdy jesteś osobą uzależnioną od alkoholu, środków odurzających i substancji psychotropowych.</li>
                                    <li>Na podstawie skierowania masz prawo do bezpłatnych badań diagnostycznych zleconych przez lekarza leczenia uzdrowiskowego, rehabilitacji leczniczej, leczenia szpitalnego, ambulatoryjnych świadczeń specjalistycznych.</li>
                                    <li>Na podstawie skierowania masz prawo do bezpłatnego sprzętu rehabilitacyjno-ortopedycznego i środków higieniczno-pielęgnacyjnych.</li>
                                    <li>Masz prawo do bezpłatnego wystawienia orzeczeń i zaświadczeń lekarskich, jeżeli są one związane z dalszym leczeniem, rehabilitacją, niezdolnością do pracy, kontynuowaniem nauki, uczestnictwem dzieci, uczniów, słuchaczy zakładów kształcenia nauczycieli i studentów w zajęciach sportowych i w zorganizowanym wypoczynku, a także jeżeli są wydawane dla celów pomocy społecznej, wspierania rodziny i systemu pieczy zastępczej, orzecznictwa o niepełnosprawności, uzyskania zasiłku pielęgnacyjnego lub ustalenia przyczyn i rodzaju uszkodzeń ciała związanych z użyciem przemocy w rodziny.</li>
                                    <li>Masz prawo do bezpłatnego wystawienia zaświadczeń lekarskich lub zaświadczeń wystawianych przez położną, jeżeli są one potrzebne do uzyskania dodatku z tytułu urodzenia dziecka lub jednorazowej zapomogi z tytułu urodzenia dziecka.</li>
                                    <li>Jeśli nie masz skierowania, jesteś zobowiązany ponieść koszty udzielonych świadczeń opieki zdrowotnej wymagających skierowania.</li>
                                    <li>Masz prawo do informacji o leku zastępczym, który jest tańszym odpowiednikiem leku wypisanego na recepcie oraz do informacji o sposobie jego stosowania, przechowywania oraz ewentualnych interakcjach z innymi medykamentami.</li>
                                </ul>
                            </p>`
            },
            {
                id: 13,
                rightTitle: "Masz prawo do dochodzenia swoich praw",
                content: `<p>
                                Gdy Twoje prawa zostały naruszone, możesz zwrócić się do:
                                <ul>
                                    <li>Rzecznika Praw Pacjenta (<a href="https://www.gov.pl/web/rpp">Serwis Rzecznika Praw Pacjenta</a>)</li>
                                    <li>kierownika podmiotu leczniczego;</li>
                                    <li>w przypadku samodzielnych publicznych zakładów opieki zdrowotnej albo podmiotów leczniczych działających w formie jednostki budżetowej – do rady społecznej lub do podmiotu tworzącego;
                                    </li>
                                    <li>samorządów zawodów medycznych:
                                        <ul style="list-style:disc;">
                                            <li>okręgowej izby lekarskiej,</li>
                                            <li>okręgowej izby pielęgniarek i położnych,</li>
                                            <li>okręgowej izby aptekarskiej,</li>
                                            <li>Krajowej Izby Diagnostów Laboratoryjnych;</li>
                                        </ul>
                                    </li>
                                    <li>sądu powszechnego (cywilnego) w celu wynagrodzenia poniesionej szkody i zadośćuczynienia za doznaną krzywdę, jak również do zakładu ubezpieczeń, z którym dana placówka lub osoba udzielająca świadczenia zdrowotnego ma podpisaną umowę ubezpieczenia odpowiedzialności cywilnej;</li>
                                    <li>organów ścigania – w przypadku podejrzenia popełnienia przestępstwa;</li>
                                    <li>Rzecznika Praw Obywatelskich.</li>
                                </ul>
                            </p>
                            <p>
                                Po wyczerpaniu postępowania przed polskimi organami wymiaru sprawiedliwości możesz wnieść skargę do Komitetu Praw Człowieka działającego we współpracy z ONZ lub Europejskiego Trybunału Praw Człowieka.
                            </p>`
            },
            {
                id: 14,
                rightTitle: "Masz prawo do przechowywania rzeczy wartościowych w depozycie",
                content: `<p>
                                Jeśli zostałeś przyjęty na leczenie stacjonarne (całodobowe), masz prawo zdeponować rzeczy wartościowe. Podmiot leczniczy jest zobowiązany do prowadzenia depozytu i musi zapewnić ci taką usługę.
                            </p>`
            },
            
        ]
    }
};
</script>


<style scoped>

</style>