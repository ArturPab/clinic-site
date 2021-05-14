<template>
    <div class="container mt-5">
        <MainTitle title="Jak zapisać się na szczepienia" />
        <LineAfterTitle />
        <ImportantContent content="Jest kilka możliwości rejestracji na szczepienie. Zainteresowani mogą zadzwonić na infolinię 989, wysłać SMS o treści SzczepimySie pod numer 664 908 556, skorzystać z e-rejestracji lub zapisać się telefonicznie bezpośrednio w punkcie szczepień. Pamiętaj! Jeśli chcesz skorzystać z ostatniej opcji, nie musisz udawać się do punktu szczepień. Wystarczy, że tam zatelefonujesz."/>
        <VaccinatesContent content="<b>Internetowe Konto Pacjenta (IKP)</b>
                    - e-Rejestracja dostępna jest na stronie <a class='text-decoration-none fw-bold' href='https://pacjent.gov.pl/'>pacjent.gov.pl</a>. Pamiętaj, że możesz skorzystać z tego sposobu, jeśli masz Profil Zaufany <a class='text-decoration-none fw-bold' href='https://www.gov.pl/web/gov/zaloz-profil-zaufany'>(sprawdź, jak łatwo go założysz)</a>.
                    System zaproponuje Ci pięć dostępnych terminów w punktach szczepień, które znajdują się blisko Twojego adresu. Jeśli żaden z proponowanych terminów nie będzie Ci pasował albo będziesz chciał zaszczepić się w innym punkcie, w innym mieście – będzie taka możliwość. Wystarczy, że skorzystasz z dostępnej wyszukiwarki i wskażesz dogodną dla Ciebie datę i lokalizację. Zaraz po dokonaniu rezerwacji, otrzymasz powiadomienie SMS, a następnie ponownie przypomnimy Ci o szczepieniu dzień przed planowanym terminem." />
        <VaccinatesContent content="<a class='text-decoration-none fw-bold' href='tel:+48989'>989</a> - bezpłatna, całodobowa Infolinia Narodowego Programu Szczepień przeciw COVID-19
                    Jeśli nie jesteś w stanie sam zadzwonić, poproś o pomoc rodzinę lub sąsiada. Przed połączeniem przygotuj Twój numer PESEL i kod pocztowy. Po połączeniu z konsultantem podaj swoje imię i nazwisko, PESEL i numer kontaktowy (opcjonalnie). Wybierz dokładny termin oraz miejsce szczepienia. Po rozmowie na podany numer telefonu otrzymasz SMS z potwierdzeniem umówienia wizyty na szczepienie. Jeśli nie uda Ci się połączyć z konsultantem, zostaniesz przekierowany do automatycznej rejestracji. Automat zaproponuje Ci kilka opcji, wybierz „Chcę zapisać się na szczepienie”. Zostaniesz poproszony o podanie numeru PESEL i Twojego kodu pocztowego. Potem wybierzesz dla siebie dogodny termin na przyjęcie szczepionki przeciwko Covid-19." />
        <VaccinatesContent content="Bezpośrednio w punktach szczepień wymienionych powyżej (Przychodnie realizujące szczepienia)" />
        <CheckVideo />
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle'
import LineAfterTitle from '@/components/LineAfterTitle'
import VaccinatesContent from './VaccinatesContent'
import ImportantContent from './ImportantContent'
import CheckVideo from './CheckVideo'

export default {
    name: "HowToSignUpInfo",
    components: {
        VaccinatesContent,
        MainTitle,
        LineAfterTitle,
        ImportantContent,
        CheckVideo
    }
}
</script>