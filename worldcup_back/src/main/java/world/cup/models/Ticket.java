package world.cup.models;

import java.util.Date;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Ticket")
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "price")
	private float price;
	@Column(name = "sellDate")
	private Date sellDate;
	
	
	@ManyToOne (targetEntity = Game.class , cascade = CascadeType.ALL)
	@JoinColumn ( name = "tg_fk" , referencedColumnName= "id")
   private Game game ; 
	
	@ManyToOne (targetEntity = Game.class , cascade = CascadeType.ALL)
	@JoinColumn ( name = "tc_fk" , referencedColumnName= "id")
   private Category category ; 
	
	
	public Ticket() {}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public float getPrice() {
		return price;
	}
	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public void setPrice(float price) {
		this.price = price;
	}
	public Date getSellDate() {
		return sellDate;
	}
	public void setSellDate(Date sellDate) {
		this.sellDate = sellDate;
	}
	public Ticket(float price, Date sellDate) {
		
		this.price = price;
		this.sellDate = sellDate;
	}
	
}
