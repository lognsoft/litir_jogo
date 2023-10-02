using System.IO;
using System.Globalization;
using System.Text.RegularExpressions;
using System.Text.Json;
// See https://aka.ms/new-console-template for more information

StreamReader reader = new StreamReader("palavras.txt");

string conteudo = reader.ReadToEnd();


String[] palavras = conteudo.Split("\n");
string comAcentos = "ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇçËẼẽÕỸỹ-ª.ØøµgµLµmµmolµUI1234567890";

List<string> listPalavras = new List<string>();
List<string> palavrasAcentosRemover = new List<string>();
List<string> palavrasLimiteCarecteresRemover = new List<string>();

// string[] vetPalavras = new string[palavras.Length];

for (int i = 0; i < palavras.Length; i++)
{
    Console.WriteLine(palavras[i]);
    listPalavras.Add(palavras[i].ToUpper());
}

foreach (var palavra in listPalavras)
{
    Console.WriteLine(palavra);
    if (palavra.Length > 7 || palavra.Length < 4)
    {
        palavrasLimiteCarecteresRemover.Add(palavra);
    }

    foreach (char letra in palavra)
    {
        for (int i = 0; i < comAcentos.Length; i++)
        {
            //Console.WriteLine(palavra);
            if (letra == comAcentos[i])
            {
                palavrasAcentosRemover.Add(palavra);
                break;
            }
        }
    }
}

foreach (var palavra in palavrasAcentosRemover)
{
    Console.WriteLine(palavra);
    listPalavras.Remove(palavra);
}

foreach (var palavra in palavrasLimiteCarecteresRemover)
{
    Console.WriteLine(palavra);
    listPalavras.Remove(palavra);
}


Console.WriteLine("FIMM");
foreach (var item in listPalavras)
{
    Console.WriteLine(item);
    Console.WriteLine(item + "-" + item.Length);
}

string jsonString = JsonSerializer.Serialize(listPalavras);

Console.WriteLine("Total de palavras: " + listPalavras.Count);

File.WriteAllText("palavras.json", jsonString);