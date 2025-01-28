const headerStyles = {
  marginTop: 15,
  color: "#00C284",
};

export default function SmartElectricsDSEPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={headerStyles}>Datenschutzerklärung</h1>
      <h2 style={headerStyles}>1. Allgemeine Informationen</h2>
      <p>
        Der Schutz Ihrer Daten ist uns wichtig. Diese App speichert keine
        personenbezogenen Daten und verarbeitet nur notwendige Einstellungen
        lokal auf Ihrem Gerät. Für Support-Anfragen per E-Mail gelten die
        nachfolgenden Regelungen.
      </p>
      <h2 style={headerStyles}>2. Lokal gespeicherte Daten</h2>
      <p>
        Die App speichert die folgenden Werte ausschließlich lokal auf Ihrem
        Gerät: Abwicklungsgebühr für den Stromtarif: Eine optionale Eingabe, die
        zur Berechnung Ihrer individuellen Stromkosten dient. Einstellung zur
        Mehrwertsteuer: Ob die Mehrwertsteuer in den angezeigten Preisen
        berücksichtigt werden soll. Vibrationseinstellungen: Ob Vibrationen
        innerhalb der App aktiviert oder deaktiviert sind. Log-Daten: Zur
        Analyse von App-Fehlern und Problemen werden technische Log-Daten lokal
        auf Ihrem Gerät gespeichert. Diese Daten umfassen keine
        personenbezogenen Informationen und werden nicht an uns oder Dritte
        übermittelt.
      </p>
      <h2 style={headerStyles}>3. Externe Datenquellen</h2>
      <p>
        Die Strompreise werden von der offenen API der Awattar GmbH geladen. Die
        Daten werden verschlüsselt über HTTPS übertragen, um eine sichere
        Kommunikation zu gewährleisten. Es erfolgt keine Übertragung von Daten
        von Ihrem Gerät an Awattar oder andere Dritte.
      </p>
      <h2 style={headerStyles}>4. Haftungsausschluss</h2>
      <p>
        Die bereitgestellten Strompreise und daraus abgeleiteten Statistiken
        stammen von der Awattar GmbH. Der Entwickler der App übernimmt keine
        Haftung für: Falsche oder unvollständige Daten von Awattar Fehlerhafte
        oder ungenaue Statistiken innerhalb der App Schäden, die durch die
        Nutzung der App entstehen könnten Bitte beachten Sie, dass die Daten von
        Awattar dynamisch sind und sich ändern können. Die Genauigkeit und
        Verfügbarkeit der Daten liegt außerhalb unserer Kontrolle.
      </p>
      <h2 style={headerStyles}>
        5. Verarbeitung von Support-Anfragen per E-Mail
      </h2>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, speichern wir folgende Daten: Ihre
        E-Mail-Adresse, um Ihre Anfrage zu beantworten Den Inhalt der Nachricht
        und eventuell enthaltene Anhänge Die E-Mail-Kommunikation erfolgt über
        Google Mail (Gmail), einen Dienst von Google LLC. Google verarbeitet die
        Nachrichten gemäß den geltenden Datenschutzbestimmungen und erfüllt die
        Anforderungen der DSGVO. Die Daten werden ausschließlich zur Bearbeitung
        Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Die
        Speicherung erfolgt nur so lange, wie es für die Bearbeitung notwendig
        ist oder gesetzliche Aufbewahrungspflichten bestehen.
      </p>
      <h2 style={headerStyles}>6. Keine Analyse- oder Tracking-Tools</h2>
      <p>
        Die App verwendet keine Analyse- oder Tracking-Tools und sammelt keine
        personenbezogenen Daten.
      </p>
      <h2 style={headerStyles}>7. Rechte und Kontakt</h2>
      <p>
        Sie haben das Recht, Auskunft über die zu Ihrer Person gespeicherten
        Daten zu erhalten, eine Berichtigung oder Löschung zu verlangen sowie
        die Verarbeitung einzuschränken. Zudem können Sie der Verarbeitung
        widersprechen. Für Datenschutzanfragen kontaktieren Sie uns bitte:
        martin.loidolt04@gmail.com
      </p>
      <h2 style={headerStyles}>8. Änderungen der Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden.
        Änderungen werden innerhalb der App oder über den entsprechenden
        App-Store kommuniziert. Stand: 28.01.2025 Bitte nutzen Sie die App mit
        dem Wissen, dass wir Ihre Daten respektieren und schützen.
      </p>
    </div>
  );
}
