# Primeiros Passos 🐤

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Sejam bem-vindos ao nosso minicurso <b>Introdução à Análise de Dados Genômicos</b>! Neste minicurso, tentaremos transmitir um pouco da <i>rotina de trabalho</i> quando se está analisando dados genômicos. Esses dados são geralmente bem pesados e, portanto, de grande demanda computacional. Assim, comumente se faz uso de um <a href="https://pt.wikipedia.org/wiki/Computa%C3%A7%C3%A3o_de_alto_desempenho" target="_blank">Núcleo de Computação de Alto Desempenho</a> para facilitar e, por vezes, permitir esse tipo de análise. Como esses núcleos computacionais armazenam importantes dados científicos, é preciso garantir que todos com acesso a tais núcleos estejam devidamente cadastrados, garantindo assim <i>a boa segurança dos dados armazenados</i>. Ademais, visto que geralmente o usuário se encontra a quilômetros e quilômetros de distância da máquina utilizada, precisamos fazer essa comunicação da forma mais simples possível — sem ícones, sem janelas e sem <i>clicks</i>! Tal comunicação é realizada fazendo uso de uma linguagem computacional bem simples conhecida como <a href="https://pt.wikipedia.org/wiki/Bash" target="_blank"><b>B</b>ourne-<b>A</b>gain <b>SH</b>ell</a>, ou somente <a href="https://pt.wikipedia.org/wiki/Bash" target="_blank">Bash</a> para os mais íntimos. Por fim, o meio que possibilita o uso dessa linguagem reta e direta é a <a href="https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos" target="_blank">Interface de Linha de Comandos</a> (popularmente conhecida como <a href="https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos" target="_blank">Terminal</a>).</p>
<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Caso você nunca tenha ouvido falar em núcleos computacionais e linguagens computacionais básicas, <i>não se apoquente!</i> O nosso minicurso é mesmo desenhado para introduzir a fundamentação teórica como também dar uma ideia da parte prática por detrás das análises genômicas. Para dar um gostinho de como é colocar as mãos na massa, nós vamos fazer uso do <a href="https://npad.ufrn.br/" target="_blank">Núcleo de Processamento de Alto Desempenho</a> (<a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>) — um supercomputador que está fisicamente localizado em <a href="https://pt.wikipedia.org/wiki/Natal_(Rio_Grande_do_Norte)" target="_blank">Natal-RN</a>.</p>
<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Portanto, para termos certeza de que tudo irá fluir bem no dia do nosso encontro, precisamos que todos os participantes obtenham acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> <i>antes do início do minicurso</i>. Assim, descrevemos a seguir como conseguir esse acesso. Para os marinheiros de primeira viagem a coisa pode parecer um tanto intimidadora, mas garantimos que é bem mais simples do que parece — é só ir pegar um ☕ ou um 🍵 e seguir o nosso passo a passo abaixo. Para aqueles que preferirem, podem alternativamente seguir o <a href="https://npad.ufrn.br/tutorials/beginner/introduction_part_1/" target="_blank">tutorial do NPAD/UFRN</a>.</p>

### 1. Ganhando Acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">O acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> é feito através do cadastro de uma <a href="https://pt.wikipedia.org/wiki/RSA_(sistema_criptogr%C3%A1fico)" target="_blank">Chave Pública tipo RSA</a> que vincula o seu computador ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> de maneira segura. ⚠️ <b>Atenção! É imprescindível realizar os passos abaixo usando o mesmo computador que será usado no dia do minicurso</b>.</p>

#### 1.1. Gerando uma chave SSH pública

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Há diferenças importantes nos passos a serem seguidos dependendo se o seu computador roda o sistema operacional. Portanto, siga os passos abaixo a depender do seu sistema: <span style="color: #b84e39;">Windows</span> (<span style="color: #b84e39; font-weight: bold;">Passos 01 — 04</span>) ou <span style="color: #b84e39;">Linux</span> / <span style="color: #b84e39;">macOS</span> (<span style="color: #b84e39; font-weight: bold;">Passos 02 — 04</span>).</p>

##### Passo 01

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;"> Infelizmente, o sistema operacional <a href="#windows">Windows</a> não dispõe de um terminal próprio. Mas podemos resolver isso facilmente — só precisamos de um programinha que emule o terminal. Existem algumas opções, mas a que recomendamos é o <a href="https://mobaxterm.mobatek.net/" target="_blank">MobaXterm</a> que ainda conta com uma versão portátil (que não precisa ser instalada 😀). Você pode baixar essa versão <a href="https://download.mobatek.net/2632026040882303/MobaXterm_Portable_v26.3.zip" target="_blank">aqui</a>. Feito isso, mova o arquivo baixado para um local de fácil acesso e descomprima-o. Depois, é só abrir o arquivo <b>MobaXterm_Personal_26.3</b>. Dentro do programa, aperte em <b>Start local terminal</b> para abrir uma janela de terminal (uma janela preta).</p> 

##### Passo 02

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;"> Para criarmos a chave, precisamos copiar e colar o comando abaixo em uma nova janela de terminal. Assim, abra uma nova janela de terminal a depender do seu sistema operacional:</p>
<ul class="custom-list_2">
<li>no <span style="color: #b84e39;">Windows</span> ver <a href="#passo-01">Passo 01</a>;</li>
<li>no <span style="color: #b84e39;">Linux</span> aperte <b>Ctrl + Alt + T</b>;</li>
<li>e no <span style="color: #b84e39;">macOS</span> abra a barra de burcas apertando <b>Command + Espaço</b> e no <b>Campo de Busca</b> digite <b>terminal</b> e aperte <b>Enter</b>.</li>
</ul>
<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;"> Nessa nova janela de terminal, cole o comando abaixo e aperte <b>Enter</b>. Você deverá digitar uma senha para a sua chave, apertar <b>Enter</b> e depois repetir a mesma senha e apertar <b>Enter</b> outra vez. Isso feito, a sua chave terá sido criada. ⚠️ <b>Atenção! É importante que você se lembre da sua senha depois — guarde-a com sabedoria!</b></p>

<div style="position: relative; margin: 20px 0;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-5" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">mkdir ~/.ssh_SSBE26; ssh-keygen -t rsa -f ~/.ssh_SSBE26/ID_NPAD</code></pre>
  <button id="copy-btn-5" onclick="copyToClipboard('ssh-path-5', 'copy-btn-5')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

##### Passo 03

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Agora tudo que temos que fazer é registrar a chave criada no sistema do <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>, o que pode ser feito <a href="https://npad.ufrn.br/npad/cadastro/aluno" target="_blank">aqui</a>. Preencha o <i>Cadastro do Aluno</i> usando o <b>mesmo email usado na inscrição do nosso minicurso</b> e selecione a turma <b>SBBE26</b>. Por fim, você deve abrir a sua chave que acabou de criar com o comando abaixo, copiar o seu conteúdo e colá-lo no campo <b>Chave Pública tipo RSA</b>. ⚠️ <b>Atenção! Por favor, assegure-se de copiar todo o conteúdo.</b></p>  

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-7" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">cat ~/.ssh_SSBE26/ID_NPAD.pub</code></pre>
  <button id="copy-btn-7" onclick="copyToClipboard('ssh-path-7', 'copy-btn-7')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

##### Passo 04

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Por fim, você receberá um email do <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> pedindo para confirmar o seu cadastro. Isso feito, você receberá um email com o seu <span style="color: #b84e39; font-weight: bold;">usuário</span>. Substitua no comando abaixo o <span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO</span> pelo seu <span style="color: #b84e39; font-weight: bold;">Usuário</span> recebido nesse email. Copie o comando com com essa alteração e cole-o no terminal do <a href="https://mobaxterm.mobatek.net/" target="_blank">MobaXterm</a> e aperte <b>Enter</b>. Digite a senha cadastrada e tudo pronto.</p>

<div style="position: relative; margin: 20px 0px;">
    <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-8" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">ssh -p 4422 -i ~/.ssh_SSBE26/ID_NPAD <span style="color: #b84e39;">COLOQUE-AQUI-O-SEU-USUÁRIO</span>@sc2.npad.ufrn.br</code></pre>
  <button id="copy-btn-8" onclick="copyToClipboard('ssh-path-8', 'copy-btn-8')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<br>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;"><b>Parabéns! o seu acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> está agora liberado!</b>&nbsp;&nbsp;🥳&nbsp;&nbsp;🎈&nbsp;&nbsp;🎉</p>

### 2. Introdução ao Ambiente UNIX

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Como mencionado na nossa sessão teórica mais cedo, a comunicação com um <a href="https://pt.wikipedia.org/wiki/Computa%C3%A7%C3%A3o_de_alto_desempenho" target="_blank">Núcleo de Computação de Alto Desempenho</a> como o <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> se dá através de comandos simples dentro do ambiente <a href="https://pt.wikipedia.org/wiki/Bash" target="_blank">Bash</a> executados no <a href="https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos" target="_blank">terminal</a>. Vamos aqui passar por alguns desses comandos e entender como podemos usá-los em conjunto para criamos frases (linhas de comando) para executar tarefas levemente mais complexas.</p>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Como é comum no aprendizado de uma nova linguagem, é fundamental conhecer bem o <i>alfabeto</i> em questão antes de se tentar escrever as primeiras sentenças. Abaixo estão listados alguns comandos bastante ultilizados no dentro do ambiente <a href="https://pt.wikipedia.org/wiki/Bash" target="_blank">Bash</a> e alguns exemplos de como podemos os usar em conjunto:</p>

<ul class="custom-list_3_first">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">#</code>Indica que a linha é uma linha de comentário, portanto não lida.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">~</code>O diterório raiz do sistema.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">.</code>O presente diretório.</li>
</ul>

<ul class="custom-list_3">
  <li><code id="ssh-path-5" style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">..</code>Um diretório atrás do presente diretório.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">mkdir</code>Cria um novo diretório.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">tab</code>Completa o nome do diretório ou ficheiro que está presente dentro de um dado diretório.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">cd</code>Entra em um diretório.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">ls</code>Lista todos os componentes de um dado diretório.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">pwd</code>Imprime o caminho completo do diretório atual.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">rm</code>Remove um ficheiro.</li>
</ul>

<ul class="custom-list_3_last">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">;</code>Passa para o próximo comando.</li>
</ul>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Usando algumas das <i>palavras</i> acima, poderíamos escrever um comando dizendo <i>Crie uma pasta chamada MyFolder</i>:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-9" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">mkdir MyFolder</code></pre>
  <button id="copy-btn-9" onclick="copyToClipboard('ssh-path-9', 'copy-btn-9')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Podemos checar que essa pasta foi realmente criada do modo desejado:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-10" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">ls</code></pre>
  <button id="copy-btn-10" onclick="copyToClipboard('ssh-path-10', 'copy-btn-10')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Podemos também entrar nessa pasta criada:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-11" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">cd MyFolder</code></pre>
  <button id="copy-btn-11" onclick="copyToClipboard('ssh-path-11', 'copy-btn-11')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Podemos sair desse diretório e voltar ao diretório original:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-12" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">cd ..</code></pre>
  <button id="copy-btn-12" onclick="copyToClipboard('ssh-path-12', 'copy-btn-12')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Por fim, podemos deletar a pasta criada:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-13" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">rm -rf MyFolder</code></pre>
  <button id="copy-btn-13" onclick="copyToClipboard('ssh-path-13', 'copy-btn-13')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Podemos também fazer mais de um passo de uma só vez colocando comandos distintos em uma mesma linha:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-14" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">mkdir MyFolder; cd MyFolder; pwd</code></pre>
  <button id="copy-btn-14" onclick="copyToClipboard('ssh-path-14', 'copy-btn-14')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Mais alguns comandos:</p>

<ul class="custom-list_3_first">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">nano</code>Cria um arquivo de texto.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">gzip</code>Comprime um arquivo.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">cat</code>Abre na tela (ecrã) um arquivo de texto.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">zcat</code>Abre na tela (ecrã) um arquivo de texto compactado.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">head</code>Ver o começo de um arquivo de texto.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">></code>Salva o que seria mostrado na tela (ecrã) em um ficheiro.</li>
</ul>

<ul class="custom-list_3_last">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">|</code>Passa o que foi processado para o próximo comando.</li>
</ul>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Então, podemos criar um arquivo de texto chamado <b>Hello_10.txt</b> com o comando abaixo. Escreva <i>Hello!</i> em 10 linhas seguidas e aperte <b>control + o</b> para salvar e depois <b>Enter</b>. Depois, aperte <b>control + x</b> para sair do programa.</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-15" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">nano Hello_10.txt</code></pre>
  <button id="copy-btn-15" onclick="copyToClipboard('ssh-path-15', 'copy-btn-15')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Lembre-se que podemos confirmar que o arquivo foi realmete criado:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-16" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">ls</code></pre>
  <button id="copy-btn-16" onclick="copyToClipboard('ssh-path-16', 'copy-btn-16')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Aqui só temos 10 linhas, mas às vezes queremos ver apenas as primeiras linhas de um arquivo de milhões e milhões de linhas! Digamos que queremos ver as 5 primeiras linhas do nosso arquivo <b>Hello_10.txt</b>:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-17" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">head -n 5 fread</code></pre>
  <button id="copy-btn-17" onclick="copyToClipboard('ssh-path-17', 'copy-btn-17')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Podemos também criar um subarquivo com essas 5 primeiras linhas do <b>Hello_10.txt</b>:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-18" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">head -n 5 Hello_10.txt > Hello_05.txt</code></pre>
  <button id="copy-btn-18" onclick="copyToClipboard('ssh-path-18', 'copy-btn-18')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Podemos também comprimir um arquivo:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-19" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">gzip Hello_05.txt</code></pre>
  <button id="copy-btn-19" onclick="copyToClipboard('ssh-path-19', 'copy-btn-19')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Vamos agora precisar de dois comandos para fazer um novo subarquivo porque arquivos comprimidos precisam de um tratamento especial:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-20" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">zcat Hello_05.txt.gz | head -n 3 > Hello_03.txt</code></pre>
  <button id="copy-btn-20" onclick="copyToClipboard('ssh-path-20', 'copy-btn-20')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

##### > Pequenas Dicas (UNIX)

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">⬆️</code>Você pode ver comandos usados anteriormente apertando a seta para cima no teclado.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">control + a</code>Move o cursor para o começo da linha.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">control + e</code>Move o cursor para o final da linha.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">control + k</code>Apaga do cursor até o final da linha.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">control + r</code>Permite pesquisar por um comando já usado anteriormente.</li>
</ul>

### 3. Sistema de Filas de Trabalho

<p style="text-align: justify; text-indent: 35px; margin: 25 0 25 0;">Como vários usuários estarão fazendo uso de um <a href="https://pt.wikipedia.org/wiki/Computa%C3%A7%C3%A3o_de_alto_desempenho" target="_blank">Núcleo de Computação de Alto Desempenho</a>, e mesmo o maior supercomputador do planeta tem lá os seus limites em relação aos recursos (armazenamento, memória e processamento), esses núcleos empregam um sistema de filas de submissão de trabalho que são controladas por programas especializados. No caso do nosso <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>, o programa usado é o <a href="https://en.wikipedia.org/wiki/Slurm_Workload_Manager" target="_blank">Slurm Workload Manager</a>, ou mais simplesmente <a href="https://en.wikipedia.org/wiki/Slurm_Workload_Manager" target="_blank">Slurm</a>. Portanto, precisamos submeter o nosso trabalho ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> deixando bem claro quais recursos esse trabalho irá precisar para que assim o <a href="https://en.wikipedia.org/wiki/Slurm_Workload_Manager" target="_blank">Slurm</a> possa organizar todas as submissões e montar uma fila de espera que garanta que todos os trabalhos serão executados sem problemas — sempre garantindo que os recursos solicitados por cada trabalho estarão disponíveis. Essa submissão é feita por meio de um ficheiro <b>.sh</b> que possui a seguinte estrutura:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">#!/bin/bash

#SBATCH --partition=intel-128               # Partição
#SBATCH --cpus-per-task=8                   # CPUs solicitados
#SBATCH --hint=compute_bound                # Um processador por core
#SBATCH --mail-type=ALL                     # Quando um e-mail deve ser enviado?
#SBATCH --mail-user=                        # Qual e-mail deve ser usado?
#SBATCH --time=0-1:0                        # Formato padrão: Dias-Horas:Minutos


# Paralelização (OpenMP) parametros:

export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
export OMP_PROC_BIND=true

# Rode abaixo o seu comando:

conda activate /home/sbbe26/conda/ipyrad
ipyrad -p params-iptest.txt -s 1
</code></pre>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 25 0 25 0;">Digamos que o conteúdo acima estivesse salvo em um ficheiro chamado <b>MyFirstSubmission.sh</b>. Poderíamos então submeter esse trabalho com o comando abaixo:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-21" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">sbatch MyFirstSubmission.sh</code></pre>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 25 0 25 0;">Isso feito, poderíamos relexar porque o programa <a href="https://en.wikipedia.org/wiki/Slurm_Workload_Manager" target="_blank">Slurm</a> irá encontrar o momento mais oportuno para lançar o nosso trabalho! 🥳</p>

##### > Pequenas Dicas (Slurm)

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">squeue -p intel-128</code>Mostra todos os trabalhos sumetidos à partição <b>intel-128</b>.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">scancel ID-OF-THE-JOB</code>Cancela uma dada submissão.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">squeue -p intel-128 -u USER-NAME</code>Mostra todos os trabalhos sumetidos à partição <b>intel-128</b> por um dado usuário.</li>
</ul>

<br>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;"><b>~ Depois dessa introdução à rotina de trabalho fazendo uso de um núcleo computacional, você está pronto para começar a processar os seus dados genômicos!</b>&nbsp;&nbsp;🧬&nbsp;&nbsp;💻&nbsp;&nbsp;📈</p>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;"></p>  

<script>
function copyToClipboard(codeId, buttonId) {
  const codeElement = document.getElementById(codeId);
  const textToCopy = codeElement.innerText;
  const button = document.getElementById(buttonId);
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = button.innerHTML;
    const originalColor = button.style.backgroundColor;
    
    button.innerHTML = '✅ Copiado!';
    button.style.backgroundColor = '#eaa973';
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.backgroundColor = originalColor;
    }, 2000);
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    button.innerHTML = '✅ Copiado!';
    button.style.backgroundColor = '#eaa973';
    
    setTimeout(() => {
      button.innerHTML = '📋 Copiar';
      button.style.backgroundColor = '#b84e39';
    }, 2000);
  });
}
</script>