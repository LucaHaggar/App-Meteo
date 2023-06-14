# App Meteo

App Meteo è un progetto che effettua una richiesta API all'endpoint di OpenWeatherMap per ottenere le informazioni meteo della città corrente.

## Dati

-Visualizzazione delle informazioni meteo: Il progetto recupera i dati meteo da OpenWeatherMap API e visualizza diverse informazioni sulla condizione meteo corrente. Queste informazioni includono il nome della città, l'orario, la descrizione del meteo (come "soleggiato" o "nuvoloso"), la temperatura attuale, l'icona corrispondente alla condizione meteo, la temperatura minima e massima, la sensazione termica, l'umidità, la velocità del vento e la pressione atmosferica.

-Ricerca dinamica della città: Il progetto offre la possibilità di cercare le informazioni meteo di una città specifica. È presente un campo di input in cui puoi inserire il nome di una città. Quando viene inviato il modulo di ricerca, vengono aggiornate le informazioni meteo sulla base della città specificata.

-Selezione dell'unità di misura: È possibile selezionare tra due unità di misura per la temperatura: Celsius e Fahrenheit. Ci sono due pulsanti corrispondenti a queste opzioni, e quando viene cliccato un pulsante, le informazioni meteo vengono aggiornate con l'unità di misura selezionata.

-Formattazione dell'orario: L'orario visualizzato viene formattato in modo leggibile, tenendo conto del fuso orario della città corrente. La funzione convertTimeStamp() converte il timestamp in un formato che include il giorno della settimana, il giorno del mese, il mese, l'anno, l'ora e i minuti.

-Icone meteorologiche: Il progetto utilizza le icone fornite da OpenWeatherMap API per rappresentare visivamente la condizione meteo corrente. L'icona corrispondente viene scaricata e visualizzata in base alla descrizione del meteo ottenuta dalla risposta API.

## Demo
https://lucahaggar.github.io/App-Meteo/

![App Screenshot](C:\Users\Lucah\wa\frontend\AppMeteo\screenshots\Screenshot 2023-06-14 134252.png)
