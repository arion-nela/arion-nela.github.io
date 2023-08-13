import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/F1Drivers.css'
import F1Team from './F1Team'
import F1TeamCup from './F1TeamCup'
import Footer from '../Footer'

export default function F1Drivers () {
  const [selectedSeason, setSelectedSeason] = useState('Season 4')
  const [selectedDivision, setSelectedDivision] = useState('Tier A')
  return (
    <>
    <div className="page-content">
    <h1 className="page-content-heading">Drivers</h1>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 1' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 1')}>Season 1</h4>
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 2' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 2')}>Season 2</h4>
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 3' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 3')}>Season 3</h4>
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 4' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 4')}>Season 4</h4>
    </div>
    <div className="division-menu-container">
        {
        selectedSeason === 'Season 1'
          ? <>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B</h4>
        </>
          : selectedSeason === 'Season 2'
            ? <>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier C' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier C')}>Tier C</h4>
          </>
            : <>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier C' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier C')}>Tier C</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'The Cup' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('The Cup')}>THE CUP</h4>
        </>
        }
    </div>
    <div className="drivers-list">
    {selectedDivision === 'Tier A' && selectedSeason === 'Season 1'
      ? <>
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Mute" driver1Number="1" driver1Flag="/ng.png" driver2Name="Eddyworth" driver2Number="67" driver2Flag="/fr.png" />
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Thomas Vink" driver1Number="8" driver1Flag="/nl.png" driver2Name="Hailee" driver2Number="69" driver2Flag="/nl.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Newman" driver1Number="16" driver1Flag="/it.png" driver2Name="Cortes" driver2Number="44" driver2Flag="/es.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Im3j3n" driver1Number="13" driver1Flag="/de.png" driver2Name="Kudos" driver2Number="35" driver2Flag="/de.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Nik Kei" driver1Number="4" driver1Flag="/ua.png" driver2Name="Faded" driver2Number="30" driver2Flag="/us.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Jaysen" driver1Number="59" driver1Flag="/nl.png" driver2Name="Kyan" driver2Number="88" driver2Flag="/nl.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Luca" driver1Number="40" driver1Flag="/en.png" driver2Name="counterfeit" driver2Number="27" driver2Flag="/en.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Kalcess" driver1Number="49" driver1Flag="/no.png" driver2Name="lawrenceselling" driver2Number="93" driver2Flag="/ph.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="focuser" driver1Number="22" driver1Flag="/es.png" driver2Name="countmuttly" driver2Number="14" driver2Flag="/dk.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Anoldenemy" driver1Number="19" driver1Flag="/hr.png" driver2Name="Flaw" driver2Number="70" driver2Flag="/nl.png" />
          </>
      : selectedDivision === 'Tier B' && selectedSeason === 'Season 1'
        ? <>
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Nydrow" driver1Number="25" driver1Flag="/be.png" driver2Name="Zerotix" driver2Number="99" driver2Flag="/de.png" />
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Maxfan" driver1Number="33" driver1Flag="/pl.png" driver2Name="Arab" driver2Number="28" driver2Flag="/us.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Veixel" driver1Number="42" driver1Flag="/se.png" driver2Name="Cheers" driver2Number="7" driver2Flag="/de.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Sp3xtre" driver1Number="31" driver1Flag="/se.png" driver2Name="Brim" driver2Number="8" driver2Flag="/nl.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Vade" driver1Number="21" driver1Flag="/se.png" driver2Name="Andrew" driver2Number="19" driver2Flag="/ro.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Rinky" driver1Number="24" driver1Flag="/nl.png" driver2Name="Br0wn" driver2Number="32" driver2Flag="/de.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="ARBITERELITEX" driver1Number="2" driver1Flag="/it.png" driver2Name="EZCAKEARDA" driver2Number="20" driver2Flag="/be.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Uklucasw" driver1Number="66" driver1Flag="/en.png" driver2Name="Romeo Gagliotti" driver2Number="19" driver2Flag="/nl.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="Daniel Bodnar" driver1Number="18" driver1Flag="/sk.png" driver2Name="Philip" driver2Number="22" driver2Flag="/nl.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Luc" driver1Number="13" driver1Flag="/nl.png" driver2Name="Melon" driver2Number="5" driver2Flag="/ro.png" />
          </>
        : selectedDivision === 'Tier A' && selectedSeason === 'Season 2'
          ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="ThomasVink" driver1Number="8" driver1Flag="/nl.png" driver2Name="Focuser" driver2Number="22" driver2Flag="/es.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Newman" driver1Number="16" driver1Flag="/it.png" driver2Name="Cortes" driver2Number="44" driver2Flag="/es.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Luca" driver1Number="40" driver1Flag="/en.png" driver2Name="Counterfeit" driver2Number="27" driver2Flag="/en.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Faded" driver1Number="30" driver1Flag="/us.png" driver2Name="Nik Kei" driver2Number="4" driver2Flag="/ua.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Luc" driver1Number="31" driver1Flag="/nl.png" driver2Name="Brim" driver2Number="8" driver2Flag="/nl.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="Nydrow" driver1Number="25" driver1Flag="/be.png" driver2Name="Veixel" driver2Number="23" driver2Flag="/se.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Kudos" driver1Number="35" driver1Flag="/de.png" driver2Name="Im3j3n" driver2Number="13" driver2Flag="/de.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Daniel Bodnar" driver1Number="18" driver1Flag="/sk.png" driver2Name="Philip" driver2Number="24" driver2Flag="/nl.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Kalcess" driver1Number="49" driver1Flag="/no.png" driver2Name="Cheers" driver2Number="7" driver2Flag="/de.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Flaw" driver1Number="70" driver1Flag="/nl.png" driver2Name="Romeo Gagliotti" driver2Number="19" driver2Flag="/nl.png" />
          </>
          : selectedDivision === 'Tier B' && selectedSeason === 'Season 2'
            ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Arab" driver1Number="28" driver1Flag="/us.png" driver2Name="Maxfan" driver2Number="33" driver2Flag="/pl.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="ARBITERELITE" driver1Number="2" driver1Flag="/it.png" driver2Name="LUKAS HENDRYCH" driver2Number="20" driver2Flag="/cz.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="UKLUCASW" driver1Number="66" driver1Flag="/en.png" driver2Name="SP3XTRE" driver2Number="31" driver2Flag="/se.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="KIMIRAI" driver1Number="32" driver1Flag="/de.png" driver2Name="VADE" driver2Number="7" driver2Flag="/se.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="CountMuttly" driver1Number="14" driver1Flag="/dk.png" driver2Name="Melon" driver2Number="5" driver2Flag="/ro.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="VLADREDD" driver1Number="86" driver1Flag="/ro.png" driver2Name="ANDREW" driver2Number="91" driver2Flag="/ro.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Anoldenemy" driver1Number="19" driver1Flag="/nl.png" driver2Name="Lawrenceselling" driver2Number="93" driver2Flag="/ph.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="MAX HOUSLEY" driver1Number="8" driver1Flag="/en.png" driver2Name="KJAERBO" driver2Number="3" driver2Flag="/dk.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Br0wn" driver1Number="32" driver1Flag="/de.png" driver2Name="ZEROTIX" driver2Number="99" driver2Flag="/de.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="KOGODA" driver1Number="21" driver1Flag="/ie.png" driver2Name="BARTUSG" driver2Number="70" driver2Flag="/hu.png" />
          </>
            : selectedDivision === 'Tier C' && selectedSeason === 'Season 2'
              ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Kai" driver1Flag="/en.png" driver2Name="Avid" driver2Flag="/nl.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Saad" driver1Flag="/sa.png" driver2Name="Tib" driver2Flag="/rs.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Jarmo" driver1Flag="/nl.png" driver2Name="Rogier Boersma" driver2Flag="/nl.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Afnonso" driver1Flag="/es.png" driver2Name="George" driver2Flag="/en.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="ukrain aim" driver1Flag="/az.png" driver2Name="jahames" driver2Flag="/blank.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="Aspec" driver1Flag="/en.png" driver2Name="Sharky" driver2Flag="/se.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="quintusj" driver1Flag="/nl.png" driver2Name="haz" driver2Flag="/en.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Lukas" driver1Flag="/dk.png" driver2Name="Manuel" driver2Flag="/it.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="luuk" driver1Flag="/nl.png" driver2Name="Aki" driver2Flag="/pl.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Egamer" driver1Flag="/gb-sct.png" driver2Name="Rayhan" driver2Flag="/be.png" />
          </>
              : selectedDivision === 'Tier A' && selectedSeason === 'Season 3'
                ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Thomas Vink" driver1Number="8" driver1Flag="/nl.png" driver2Name="Focuser" driver2Number="2" driver2Flag="/es.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Melon" driver1Number="16" driver1Flag="/ro.png" driver2Name="Kalcess" driver2Number="27" driver2Flag="/no.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Luca" driver1Number="40" driver1Flag="/en.png" driver2Name="Counterfeit" driver2Number="44" driver2Flag="/en.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Faded" driver1Number="30" driver1Flag="/us.png" driver2Name="Nik kei" driver2Number="4" driver2Flag="/ua.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Stra" driver1Number="31" driver1Flag="/ko.png" driver2Name="Veixel" driver2Number="42" driver2Flag="/se.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="Alpha Romeo" driver1Number="25" driver1Flag="/nl.png" driver2Name="Antonio Brancati" driver2Number="23" driver2Flag="/it.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Cortes" driver1Number="35" driver1Flag="/es.png" driver2Name="Daniel Bodnar" driver2Number="13" driver2Flag="/sk.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Maxfan" driver1Number="18" driver1Flag="/pl.png" driver2Name="Max Housley" driver2Number="24" driver2Flag="/en.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Sp3xtre" driver1Number="49" driver1Flag="/se.png" driver2Name="EndAndrews" driver2Number="7" driver2Flag="/cz.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Justin Janson" driver1Number="70" driver1Flag="/nl.png" driver2Name="Lukas Hendrych" driver2Number="19" driver2Flag="/cz.png" />
          </>
                : selectedDivision === 'Tier B' && selectedSeason === 'Season 3'
                  ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Kisiel" driver1Number="28" driver1Flag="/pl.png" driver2Name="Lando" driver2Number="33" driver2Flag="/pl.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Wymen" driver1Number="2" driver1Flag="/tr.png" driver2Name="Tsar" driver2Number="20" driver2Flag="/hu.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Vaipz" driver1Number="66" driver1Flag="/dk.png" driver2Name="HackoDK" driver2Number="31" driver2Flag="/dk.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Vade" driver1Number="32" driver1Flag="/se.png" driver2Name="Adam" driver2Number="7" driver2Flag="/en.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Spyzer" driver1Number="14" driver1Flag="/nl.png" driver2Name="UKLUCASW" driver2Number="5" driver2Flag="/en.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="Bald" driver1Number="86" driver1Flag="/nl.png" driver2Name="Supergaming" driver2Number="91" driver2Flag="/se.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Cortes" driver1Number="19" driver1Flag="/es.png" driver2Name="Jan Svrdlik" driver2Number="93" driver2Flag="/cz.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Rocky" driver1Number="8" driver1Flag="/de.png" driver2Name="ukrain aim" driver2Number="3" driver2Flag="/az.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Hugyme" driver1Number="32" driver1Flag="/au.png" driver2Name="Dopi" driver2Number="99" driver2Flag="/fi.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Bartusg" driver1Number="21" driver1Flag="/hu.png" driver2Name="Bolar" driver2Number="70" driver2Flag="/nl.png" />
          </>
                  : selectedDivision === 'Tier C' && selectedSeason === 'Season 3'
                    ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Sharky" driver1Flag="/se.png" driver2Name="Lukas" driver2Flag="/dk.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Manuel" driver1Flag="/it.png" driver2Name="afnonso" driver2Flag="/es.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="c0zm1c" driver1Flag="/en.png" driver2Name="Rayhan" driver2Flag="/be.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="BasiqlyCrazy" driver1Flag="/se.png" driver2Name="Sea Pulse" driver2Flag="/nl.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="jarmo" driver1Flag="/nl.png" driver2Name="luuk" driver2Flag="/nl.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="danottok" driver1Flag="/fi.png" driver2Name="Henry" driver2Flag="/us.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Aki" driver1Flag="/pl.png" driver2Name="porp" driver2Flag="/gb.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="CurtisJones" driver1Flag="/gb.png" driver2Name="OGK Snake" driver2Flag="/gb.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Flerber" driver1Flag="/gb.png" driver2Name="Rabas" driver2Flag="/es.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Saad" driver1Flag="/sa.png" driver2Name="Tinos_RL" driver2Flag="/nl.png" />
          </>
                    : selectedDivision === 'Tier A' && selectedSeason === 'Season 4'
                      ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Thomas Vink" driver1Number="3" driver1Flag="/nl.png" driver2Name="maxfan" driver2Number="93" driver2Flag="/mc.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Antonio Brancati" driver1Number="7" driver1Flag="/it.png" driver2Name="Emil Lundell" driver2Number="36" driver2Flag="/se.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Sp3xtre" driver1Number="40" driver1Flag="/se.png" driver2Name="Lukáš Hendrych" driver2Number="19" driver2Flag="/cz.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Justin Janson" driver1Number="92" driver1Flag="/nl.png" driver2Name="Daniel Bodnár" driver2Number="80" driver2Flag="/sk.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Dallan McTeer" driver1Number="32" driver1Flag="/us.png" driver2Name="Nik kei" driver2Number="95" driver2Flag="/ua.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="EndAndrews" driver1Number="73" driver1Flag="/cz.png" driver2Name="Adam" driver2Number="12" driver2Flag="/en.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Dopichu" driver1Number="90" driver1Flag="/fi.png" driver2Name="Gabor" driver2Number="71" driver2Flag="/hu.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Paaveli" driver1Number="18" driver1Flag="/fi.png" driver2Name="Jack" driver2Number="24" driver2Flag="/sc.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Melon" driver1Number="8" driver1Flag="/ro.png" driver2Name="Focuser" driver2Number="42" driver2Flag="/es.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Romeo Gagliotti" driver1Number="68" driver1Flag="/nl.png" driver2Name="Jan Švrdlik" driver2Number="12" driver2Flag="/cz.png" />
          </>
                      : selectedDivision === 'Tier B' && selectedSeason === 'Season 4'
                        ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Luca Stevens" driver1Number="40" driver1Flag="/en.png" driver2Name="Cameron Clarke" driver2Number="72" driver2Flag="/en.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Stra" driver1Number="8" driver1Flag="/rs.png" driver2Name="Anthony" driver2Number="3" driver2Flag="/gr.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Veixel" driver1Number="42" driver1Flag="/se.png" driver2Name="Spyzer" driver2Number="25" driver2Flag="/nl.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="SHADRIN" driver1Number="70" driver1Flag="/ru.png" driver2Name="Curtis Jones" driver2Number="71" driver2Flag="/en.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Marcel Hol" driver1Number="17" driver1Flag="/hu.png" driver2Name="Lando" driver2Number="45" driver2Flag="/pl.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="Mute" driver1Number="89" driver1Flag="/ng.png" driver2Name="Illyrian_LZ9" driver2Number="9" driver2Flag="/al.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Bald" driver1Number="88" driver1Flag="/ie.png" driver2Name="Durrrp" driver2Number="66" driver2Flag="/dk.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Yulian Kalenantovich" driver1Number="87" driver1Flag="/ua.png" driver2Name="Manuel" driver2Number="90" driver2Flag="/it.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Chizz" driver1Number="80" driver1Flag="/en.png" driver2Name="Kevin Jerling" driver2Number="67" driver2Flag="/se.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Bolar" driver1Number="38" driver1Flag="/nl.png" driver2Name="Nojus Gedvillas" driver2Number="56" driver2Flag="/lt.png" />
          </>
                        : selectedDivision === 'The Cup' && selectedSeason === 'Season 4'
                          ? <>
          <F1TeamCup />
          { /* <F1TeamCup teamColor="#ffd700" teamBackground="rgba(255, 215, 0, 0.2)" teamImage="/psr.png" teamName="Premier Sim Racing" driver1Name="Luca Stevens" driver1Number="40" driver1Flag="/en.png" driver2Name="Cameron Clarke" driver2Number="93" driver2Flag="/en.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#b02a2a" teamBackground="rgba(176, 42, 42, 0.2)" teamImage="/fpr.png" teamName="Formula Premiére Racing" driver1Name="Stra" driver1Number="16" driver1Flag="/rs.png" driver2Name="Anthony" driver2Number="27" driver2Flag="/gr.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#181d32" teamBackground="rgba(24, 29, 50, 0.2)" teamImage="/vrl.png" teamName="Virtual Racing League" driver1Name="Veixel" driver1Number="40" driver1Flag="/se.png" driver2Name="Spyzer" driver2Number="44" driver2Flag="/nl.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#d557ff" teamBackground="rgba(213, 87, 255, 0.2)" teamImage="/amr.png" teamName="Amethyst Racing" driver1Name="SHADRIN" driver1Number="30" driver1Flag="/ru.png" driver2Name="Curtis Jones" driver2Number="4" driver2Flag="/en.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#90C2F4" teamBackground="rgba(144, 194, 244, 0.2)" teamImage="/sre.png" teamName="Semi Racing eSports" driver1Name="Marcel Hol" driver1Number="31" driver1Flag="/hu.png" driver2Name="Lando" driver2Number="8" driver2Flag="/pl.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#00239c" teamBackground="rgba(0, 35, 156, 0.2)" teamImage="/vf1.png" teamName="VF1 Racing" driver1Name="Mute" driver1Number="25" driver1Flag="/ng.png" driver2Name="Illyrian_LZ9" driver2Number="23" driver2Flag="/al.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#61d836" teamBackground="rgba(97, 216, 54, 0.2)" teamImage="/crf.png" teamName="CRF Racing Team" driver1Name="Bald" driver1Number="35" driver1Flag="/ie.png" driver2Name="Durrrp" driver2Number="13" driver2Flag="/dk.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Yulian Kalenantovich" driver1Number="18" driver1Flag="/ua.png" driver2Name="Manuel" driver2Number="24" driver2Flag="/it.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Chizz" driver1Number="49" driver1Flag="/en.png" driver2Name="Kevin Jerling" driver2Number="7" driver2Flag="/se.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" />
          <F1TeamCup teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Bolar" driver1Number="70" driver1Flag="/nl.png" driver2Name="Nojus Gedvillas" driver2Number="19" driver2Flag="/lt.png" driver3Name="Luca Stevens" driver3Number="40" driver3Flag="/en.png" driver4Name="Cameron Clarke" driver4Number="93" driver4Flag="/en.png" teamPrincipal="Veixel" /> */ }
          </>

                          : selectedDivision === 'Tier C' && selectedSeason === 'Season 1'
                            ? setSelectedDivision('Tier A')
                            : <> <h4 id='broken'>SOMETHING BROKE</h4></>
    }
    </div>
    <Footer />
    </div>
    </>
  )
}
