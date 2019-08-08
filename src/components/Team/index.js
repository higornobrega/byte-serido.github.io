import React from 'react';
import './styles.css';

function Team() {
    return (
        <div className='title section text-center'>
            <h2>Nosso <span class="color">Time</span></h2>
            <div className='border'></div>

            <div className="team-member">
                <ul>
                <li>
                        <img src="https://avatars2.githubusercontent.com/u/26658088?s=460&v=4" alt="avatar" />
                        <footer>
                            <h3>Higor Nóbrega</h3>
                            <span>Presidente/Fundador</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </footer>
                    </li>
                    <li>
                        <img src="https://avatars3.githubusercontent.com/u/29229638?s=460&v=4" alt="avatar" />
                        <footer>
                            <h3>Laio Andrade</h3>
                            <span>Vice-presidente</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </footer>
                    </li>
                    <li>
                        <img src="https://avatars3.githubusercontent.com/u/28723539?s=460&v=4" alt="avatar" />
                        <footer>
                            <h3>Bruno de Souza</h3>
                            <span>Diretor de projetos</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </footer>
                    </li>
                    <li>
                        <img src="https://avatars3.githubusercontent.com/u/16367752?s=460&v=4" alt="avatar" />
                        <footer>
                            <h3>João Eudes Lima</h3>
                            <span>Diretor de recursos humanos</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </footer>
                    </li>
                    <li>
                        <img src="https://avatars3.githubusercontent.com/u/42034783?s=460&v=4" alt="avatar" />
                        <footer>
                            <h3>Marcio Miller</h3>
                            <span>Diretor financeiro</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </footer>
                    </li>
                    <li>
                        <img src="https://avatars1.githubusercontent.com/u/29786511?s=460&v=4" alt="avatar" />
                        <footer>
                            <h3>Paulo Henrique Dantas</h3>
                            <span>Diretor de marketing</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </footer>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Team;
