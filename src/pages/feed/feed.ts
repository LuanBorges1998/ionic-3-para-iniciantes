import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ],
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Charles França",
    data: "November 5, 1955",
    descricao: "I'm creating a fantastic app.",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  private _nome_usuario: string = "Charles França do Código";
  public get nome_usuario(): string {
    return this._nome_usuario;
  }
  public set nome_usuario(v: string) {
    this._nome_usuario = v;
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  /**
   * somaDoisNumeros
    */
  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=> {
        const response = (data as any);
        //const objeto_retorno = JSON.parse(response);
        this.lista_filmes = response.results;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

}
