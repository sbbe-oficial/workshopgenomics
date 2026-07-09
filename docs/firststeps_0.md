# Primeiros Passos 🐤

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Sejam bem-vindos ao nosso minicurso <b>Introdução à Análise de Dados Genômicos</b>! Neste minicurso, tentaremos transmitir um pouco da <i>rotina de trabalho</i> quando se está analisando dados genômicos. Esses dados são geralmente bem pesados e, portanto, de grande demanda computacional. Assim, comumente se faz uso de um <a href="https://pt.wikipedia.org/wiki/Computa%C3%A7%C3%A3o_de_alto_desempenho" target="_blank">Núcleo de Computação de Alto Desempenho</a> para facilitar e, por vezes, permitir esse tipo de análise. Como esses núcleos computacionais armazenam importantes dados científicos, é preciso garantir que todos com acesso a tais núcleos estejam devidamente cadastrados, garantindo assim <i>a boa segurança dos dados armazenados</i>. Ademais, visto que geralmente o usuário se encontra a quilômetros e quilômetros de distância da máquina utilizada, precisamos fazer essa comunicação da forma mais simples possível — sem ícones, sem janelas e sem <i>clicks</i>! Tal comunicação é realizada fazendo uso de uma linguagem computacional bem simples conhecida como <a href="https://pt.wikipedia.org/wiki/Bash" target="_blank"><b>B</b>ourne-<b>A</b>gain <b>SH</b>ell</a>, ou somente <a href="https://pt.wikipedia.org/wiki/Bash" target="_blank">Bash</a> para os mais íntimos. Por fim, o meio que possibilita o uso dessa linguagem reta e direta é a <a href="https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos" target="_blank">Interface de Linha de Comandos</a> (popularmente conhecida como <a href="https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos" target="_blank">Terminal</a>).</p>
<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Caso você nunca tenha ouvido falar em núcleos computacionais e linguagens computacionais básicas, <i>não se apoquente!</i> O nosso minicurso é mesmo desenhado para introduzir a fundamentação teórica como também dar uma ideia da parte prática por detrás das análises genômicas. Para dar um gostinho de como é colocar as mãos na massa, nós vamos fazer uso do <a href="https://npad.ufrn.br/" target="_blank">Núcleo de Processamento de Alto Desempenho</a> (<a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>) — um supercomputador que está fisicamente localizado em <a href="https://pt.wikipedia.org/wiki/Natal_(Rio_Grande_do_Norte)" target="_blank">Natal-RN</a>.</p>
<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Portanto, para termos certeza de que tudo irá fluir bem no dia do nosso encontro, precisamos que todos os participantes obtenham acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> <i>antes do início do minicurso</i>. Assim, descrevemos a seguir como conseguir esse acesso. Para os marinheiros de primeira viagem a coisa pode parecer um tanto intimidadora, mas garantimos que é bem mais simples do que parece — é só ir pegar um ☕ ou um 🍵 e seguir o nosso passo a passo abaixo. Para aqueles que preferirem, podem alternativamente seguir o <a href="https://npad.ufrn.br/tutorials/beginner/introduction_part_1/" target="_blank">tutorial do NPAD/UFRN</a>.</p>

### Ganhando Acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">O acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> é feito através do cadastro de uma chave pública do tipo RSA que vincula o seu computador ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> de maneira segura. ⚠️ <b>Atenção! É imprescindível realizar os passos abaixo usando o mesmo computador que será usado no dia do minicurso</b>.</p>

#### Gerando uma chave SSH pública

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Há diferenças importantes nos passos a serem seguidos dependendo se o seu computador roda o sistema operacional <a href="#linux-macos">Linux / macOS</a> ou <a href="#windows">Windows</a>:</p>

##### > Linux / macOS

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Felizmente, esses sistemas operacionais já contam com um terminal próprio em Bash e pronto para ser usado. Assim, abra o terminal do Linux apertanto <b>Ctrl + Alt + T</b>; ou macOS abra a barra de burcas apertando <b>Command + Espaço</b> e no <b>Campo de Busca</b> digite <b>terminal</b> e aperte <b>Enter</b>. Quando o terminal abrir (uma tela preta), digite ou copie o comando abaixo no terminal e aperte enter para criar sua chave pública SSH do tipo RSA. Você deverá digitar uma senha para a sua chave, apertar <b>Enter</b> e depois repetir a mesma senha. ⚠️ <b>Atenção! É importante que você se lembre da sua senha depois — guarde-a com sabedoria!</b> Isso feito, a sua chave terá sido criada.</p>

<div style="position: relative; margin: 20px 0;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-1" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">mkdir ~/.ssh_SSBE26; ssh-keygen -t rsa -f ~/.ssh_SSBE26/ID_NPAD</code></pre>
  <button id="copy-btn-1" onclick="copyToClipboard('ssh-path-1', 'copy-btn-1')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Agora tudo que temos que fazer é registrar a chave criada no sistema do <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>, o que pode ser feito <a href="https://npad.ufrn.br/npad/cadastro/aluno" target="_blank">aqui</a>. Preencha o <i>Cadastro do Aluno</i> usando o <b>mesmo email usado na inscrição do nosso minicurso</b> e selecione a turma <b>SBBE26</b>. Por fim, você deve abrir a sua chave que acabou de criar com o comando abaixo, copiar o seu conteúdo e colá-lo no campo <b>Chave Pública tipo RSA</b>. ⚠️ <b>Atenção! Por favor, assegure-se de copiar todo o conteúdo.</b></p>  

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-3" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">cat ~/.ssh_SSBE26/ID_NPAD.pub</code></pre>
  <button id="copy-btn-3" onclick="copyToClipboard('ssh-path-3', 'copy-btn-3')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Por fim, você receberá um email do <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> pedindo para confirmar o seu cadastro. Isso feito, você receberá um email com o seu <span style="color: #b84e39; font-weight: bold;">usuário</span>. Substitua no comando abaixo o <span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO</span> pelo seu <span style="color: #b84e39; font-weight: bold;">Usuário</span> recebido nesse email. Copie o comando com com essa alteração e cole-o no terminal e aperte <b>Enter</b>. Digite a senha cadastrada e tudo pronto — o seu acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> está agora liberado! 🎉</p>

<div style="position: relative; margin: 20px 0px;">
    <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-4" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">ssh -p 4422 -i ~/.ssh_SSBE26/ID_NPAD <span style="color: #b84e39;">COLOQUE-AQUI-O-SEU-USUÁRIO</span>@sc2.npad.ufrn.br</code></pre>
  <button id="copy-btn-4" onclick="copyToClipboard('ssh-path-4', 'copy-btn-4')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

##### > Windows

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Infelizmente, esse sistema operacional não dispõe de um terminal próprio. Mas podemos resolver isso facilmente — só precisamos de um programinha que emule o terminal. Existem algumas opções, mas a que recomendamos é o <a href="https://mobaxterm.mobatek.net/" target="_blank">MobaXterm</a> que ainda conta com uma versão portátil (que não precisa ser instalada 😀). Você pode baixar essa versão <a href="https://download.mobatek.net/2632026040882303/MobaXterm_Portable_v26.3.zip" target="_blank">aqui</a>. Feito isso, mova o arquivo baixado para um local de fácil acesso e descomprima-o. Depois, é só abrir o arquivo <b>MobaXterm_Personal_26.3</b>. Dentro do programa, aperte em <b>Start local terminal</b> para abrir uma janela de terminal (uma janela preta). Nesse janela, cole o comando abaixo e aperte <b>Enter</b>. Você deverá digitar uma senha para a sua chave, apertar <b>Enter</b> e depois repetir a mesma senha. ⚠️ <b>Atenção! É importante que você se lembre da sua senha depois — guarde-a com sabedoria!</b> Isso feito, a sua chave terá sido criada.</p>

<div style="position: relative; margin: 20px 0;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-5" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">mkdir ~/.ssh_SSBE26; ssh-keygen -t rsa -f ~/.ssh_SSBE26/ID_NPAD</code></pre>
  <button id="copy-btn-5" onclick="copyToClipboard('ssh-path-5', 'copy-btn-5')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Agora tudo que temos que fazer é registrar a chave criada no sistema do <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>, o que pode ser feito <a href="https://npad.ufrn.br/npad/cadastro/aluno" target="_blank">aqui</a>. Preencha o <i>Cadastro do Aluno</i> usando o <b>mesmo email usado na inscrição do nosso minicurso</b> e selecione a turma <b>SBBE26</b>. Por fim, você deve abrir a sua chave que acabou de criar com o comando abaixo, copiar o seu conteúdo e colá-lo no campo <b>Chave Pública tipo RSA</b>. ⚠️ <b>Atenção! Por favor, assegure-se de copiar todo o conteúdo.</b></p>  

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-7" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">cat ~/.ssh_SSBE26/ID_NPAD.pub</code></pre>
  <button id="copy-btn-7" onclick="copyToClipboard('ssh-path-7', 'copy-btn-7')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Por fim, você receberá um email do <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> pedindo para confirmar o seu cadastro. Isso feito, você receberá um email com o seu <span style="color: #b84e39; font-weight: bold;">usuário</span>. Substitua no comando abaixo o <span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO</span> pelo seu <span style="color: #b84e39; font-weight: bold;">Usuário</span> recebido nesse email. Copie o comando com com essa alteração e cole-o no terminal do <a href="https://mobaxterm.mobatek.net/" target="_blank">MobaXterm</a> e aperte <b>Enter</b>. Digite a senha cadastrada e tudo pronto — o seu acesso ao <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> está agora liberado! 🎉</p>

<div style="position: relative; margin: 20px 0px;">
    <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-8" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">ssh -p 4422 -i ~/.ssh_SSBE26/ID_NPAD <span style="color: #b84e39;">COLOQUE-AQUI-O-SEU-USUÁRIO</span>@sc2.npad.ufrn.br</code></pre>
  <button id="copy-btn-8" onclick="copyToClipboard('ssh-path-8', 'copy-btn-8')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

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