# Reprodutibilidade 🔄

### 1. Fazer. Refazer. Desfazer. Fazer Novamente. SALVAR TUDO! 🚨

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">No trabalho com dados genômicos sempre rodamos as análise infindáveis vezes com parâmetros diferentes e geramos inúmeras versões dos gráficos apresentados fazendo uso de <i>scripts</i> levemente modificados. Assim, é de suma impotância que tenhamos um ótimo controle dessas diferentes versões. Isso é geralmente conseguido usando-se um bom <a href="https://pt.wikipedia.org/wiki/Sistema_de_controle_de_vers%C3%B5es" target="_blank">Sistema de Controle de Versões</a>, que garante que tenhamos total controle de todas as versões envolvidas. O <a href="https://github.com/" target="_blank">GitHub</a> é a plataforma de hospedagem de códigos e arquivos mais comumente utilizada na área científica, e faz do <a href="https://git-scm.com/" target="_blank">Git</a> — um amplo sistema de controle de versões. Portanto, iremos agora passar por uma breve introdução à rotina de trabalho com o essa importante ferramente de trabalho.</p>

#### 1.1. Criando Uma Conta no <a href="https://github.com/" target="_blank">GitHub</a>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Caso você ainda não tenha uma conta no <a href="https://github.com/" target="_blank">GitHub</a>, você pode criar uma de forma gratuita <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home" target="_blank">aqui</a> usando o caminho que você achar melhor.</p>

#### 1.2. Criando Um Novo Repositório

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Os códigos armazenados no <a href="https://github.com/" target="_blank">GitHub</a> são hospedados dentro de repositórios destinados a projetos específicos, e esses repositórios podem ser <i>públicos</i> ou <i>privados</i>. Assim, precisamos agora criar um novo repositório, o que pode ser feito <a href="https://github.com/new" target="_blank">aqui</a> segundo esses parâmetros (não é preciso se preocupar com as demais opções):</p>

<ul class="custom-list_3_first">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">Repository Name</code>Escolha um nome que faça sentido não somente para você, mas também para outras pessoas que venham a visitar o seu repositório.</li>
</ul>

<ul class="custom-list_3">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">Description</code>Adicione uma pequena descrição do seu repositório. Mais uma vez, lembre-se que é bom ter uma descrição que seja de fácil entendimento por parte de possíveis visitantes.</li>
</ul>

#### 1.3. Gerando uma chave SSH pública no <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Você agora pode conectar a sua conta no <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> ao seu <a href="https://github.com/" target="_blank">GitHub</a> também através de uma <a href="https://pt.wikipedia.org/wiki/RSA_(sistema_criptogr%C3%A1fico)" target="_blank">Chave Pública tipo RSA</a>. Para isso, primeiro crie uma chave na sua conta no <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> usando o comando abaixo. Você deverá digitar uma senha para a sua chave, apertar <b>Enter</b> e depois repetir a mesma senha e apertar <b>Enter</b> outra vez. Isso feito, a sua chave terá sido criada. ⚠️ <b>Atenção! É importante que você se lembre da sua senha depois — guarde-a com sabedoria!</b></p></p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-22" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">ssh-keygen -t ed25519 -C "COLOQUE-AQUI-O-EMAIL-CADASTRADO-NO-GITHUB" -f ~/.ssh/MyNPAD-MyGitHub</code></pre>
  <button id="copy-btn-22" onclick="copyToClipboard('ssh-path-22', 'copy-btn-22')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Abra a chave criada com o comando abaixo e copie todo o seu contúdo:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-23" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">cat ~/.ssh/MyNPAD-MyGitHub.pub</code></pre>
  <button id="copy-btn-23" onclick="copyToClipboard('ssh-path-23', 'copy-btn-23')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Você deve registrar o a chave criada <a href="https://github.com/settings/ssh/new" target="_blank">aqui</a> usando os seguintes parâmetros:</p>

<ul class="custom-list_3_first">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">Title</code>Escolha um nome que faça sentido para você e que possa ser fácil de você lembrar no futuro.</li>
</ul>

<ul class="custom-list_3_last">
  <li><code style="color: #b84e39 !important; background-color: transparent; padding: 0; font-weight: bold; margin-right: 18px;">Key</code>Cole aqui todo o conteúdo da chave criada.</li>
</ul>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Por fim, você pode fazer com que o <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> sempre use essa chave. Para isso, abra o ficheiro <b>~/.ssh/config</b> com o programa <a href="https://pt.wikipedia.org/wiki/GNU_nano" target="_blank">nano</a> com o seguinte comando:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-24" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">nano ~/.ssh/config</code></pre>
  <button id="copy-btn-24" onclick="copyToClipboard('ssh-path-24', 'copy-btn-24')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">E nele cole as linhas abaixo (lembre-se que para sair do nano você deve fazer <b>control + o</b>, apertar <b>Enter</b> e então <b>control + x</b>):</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-25" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/MyNPAD-MyGitHub</code></pre>
  <button id="copy-btn-25" onclick="copyToClipboard('ssh-path-25', 'copy-btn-25')" style="position: absolute; top: 50%; transform: translateY(-50%); right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

#### 1.4. <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> <-> <a href="https://github.com/" target="_blank">GitHub</a> — Uma Conexão Necessária

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Só resta a você configurar a sua conta no <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a> de forma tal que ela sempre use a sua conta no <i>GitHub</i>. Isso pode ser feito com o comando abaixo fazendo uso.</p>

<div style="position: relative; margin: 20px 0px;">
    <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-26" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">git config --global user.name GITHUB-USERNAME; git config --global user.email EMAIL-CADASTRADO-NO-GITHUB</code></pre>
  <button id="copy-btn-26" onclick="copyToClipboard('ssh-path-26', 'copy-btn-26')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Pronto! Agora você tem repositório criado e tudo configurado no <a href="https://npad.ufrn.br/" target="_blank">NPAD/UFRN</a>. Assim, agora você pode conectar esse repositório ao diretório <b>SBBE26_PopGen</b> criado no passo anterior. Para isso, vamos primeiro voltar ao diretório <b>SBBE26_PopGen</b> e depois iniciar essa conexão com o comando abaixo:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-27" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">cd ..; git init -b main</code></pre>
  <button id="copy-btn-27" onclick="copyToClipboard('ssh-path-27', 'copy-btn-27')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Daí você pode fazer a conexão de fato adicionando ao comando abaixo o seu <b>nome de usuário no GitHub</b> e o <b>nome do repositório</b> em questão:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-28" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">git remote add origin git@github.com:SEU-USERNAME-NO-GITHUB/NOME-DO-SEU-REPOSITÓRIO.git</code></pre>
  <button id="copy-btn-28" onclick="copyToClipboard('ssh-path-28', 'copy-btn-28')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Você pode criar o seu primeiro ficheiro dentro do seu repositório. Vamos aproveitar essa oportunidade para criar um arquivo especial dentro do sistema do <i>GitHub</i> — o ficheiro <b>README.md</b>. Crie-o com o <b>nano</b> e coloque nele o conteúdo abaixo Lembre-se que você deve apertar <b>control + o</b> seguido do <b>Enter</b> para salvar, e depois <b>control + x</b> para sair do programa <b>nano</b>.</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-29" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">## Dummy Repository for the [SBBE26 Introduction to Genomic Analyses Workshop](https://sbbe-oficial.github.io/workshopgenomics/)

> Documentation outlining the pipeline's workflow.  
***

### Data Processing 

The dataset [ipsimdata.tar.gz](https://github.com/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO-GITHUB</span>/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-REPOSITÓRIO-GITHUB</span>/blob/main/ipsimdata.tar.gz) was processed with [Ipyrad](https://ipyrad.readthedocs.io/en/master/) using the parameters in [params-tutorial.txt](https://github.com/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO-GITHUB</span>/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-REPOSITÓRIO-GITHUB</span>/blob/main/params-tutorial.txt).

### Population Structure  

#### Principal Component Analysis

This analysis was performed with the software [Plink](https://www.cog-genomics.org/plink/) as described in [RunsPCA.sh](https://github.com/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO-GITHUB</span>/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-REPOSITÓRIO-GITHUB</span>/blob/main/SBBE26_PopGen/PCA/RunsPCA.sh). The results were ploted using R script [PlotsPCA.R](https://github.com/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO-GITHUB</span>/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-REPOSITÓRIO-GITHUB</span>/blob/main/SBBE26_PopGen/PCA/PlotsPCA.R).

- [PCA_Plot.pdf](https://github.com/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO-GITHUB</span>/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-REPOSITÓRIO-GITHUB</span>/blob/main/SBBE26_PopGen/PCA/PCA_Plot.pdf)

#### Estimation of Individual Ancestries

This analysis was performed with the software [Admixture](https://dalexander.github.io/admixture/) as described in [RunsAdmixture.sh](https://github.com/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO-GITHUB</span>/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-REPOSITÓRIO-GITHUB</span>/blob/main/SBBE26_PopGen/Admixture/RunsAdmixture.sh).

- [Admixture_Plot.pdf](https://github.com/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-USUÁRIO-GITHUB</span>/<span style="color: #b84e39; font-weight: bold;">COLOQUE-AQUI-O-SEU-REPOSITÓRIO-GITHUB</span>/blob/main/SBBE26_PopGen/Admixture/Admixture_Plot.pdf)</code></pre>
  <button id="copy-btn-29" onclick="copyToClipboard('ssh-path-29', 'copy-btn-29')" style="position: absolute; top: 42.5%; transform: translateY(-50%); right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Tendo adicionado o primeiro ficheiro, agora você pode submeter ao <i>GitHub</i> as mudança feita localmente no nosso repositório. Primeiro, temos que adicionar as mudanças:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-30" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">git add .</code></pre>
  <button id="copy-btn-30" onclick="copyToClipboard('ssh-path-30', 'copy-btn-30')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Então você pode adicionar uma nota (<i>commit</i>) a ser vinculada à mudança em questão:</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-31" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">git commit -m "<span style="color: #b84e39;">COLOQUE-AQUI-UM-COMENTÁRIO-QUE-FAÇA-SENTIDO</span>"</code></pre>
  <button id="copy-btn-31" onclick="copyToClipboard('ssh-path-31', 'copy-btn-31')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
</div>

<p style="text-align: justify; text-indent: 35px; margin: 0 0 0 0;">Finalmente, você pode enviar ao seu repositório as mudanças e no mesmo segundo o seu repositório será atualizado no <i>GitHub</i>!</p>

<div style="position: relative; margin: 20px 0px;">
  <pre style="background-color: #fcfdff; color: #fcfdff; padding: 12px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; margin: 0; border: 1px solid #eaa973;"><code id="ssh-path-32" style="color: #000000; background-color: transparent; padding: 0; font-weight: bold;">git push -u origin main</code></pre>
  <button id="copy-btn-32" onclick="copyToClipboard('ssh-path-32', 'copy-btn-32')" style="position: absolute; top: 8px; right: 8px; background-color: #b84e39; color: white; border: none; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; font-family: system-ui, sans-serif; transition: all 0.2s;">📋 Copiar</button>
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