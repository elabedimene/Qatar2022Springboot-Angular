package world.cup.models;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "Game")

public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	//@Column(name = "id")
	private long id;
	@Column(name = "name")
	private String name;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Column(name = "date")
	private Date date;
	@Column(name = "equipe1")
	private String equipe1;
	@Column(name = "equipe2")
	private String equipe2;
	
	
   
    @OneToOne(fetch = FetchType.LAZY)
	//@OneToOne(targetEntity =  Stadium.class, cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"hibernateLazyInitializer" , "handler"})
	@JoinColumn (name = "stad_id" , referencedColumnName = "id")
	private Stadium stad ;
	
	
	//@OneToOne (targetEntity = Stadium.class , cascade = CascadeType.ALL)
	//@JoinColumn ( name = "sg_fk" , referencedColumnName= "id")
   //private Stadium stadium  ; 
	
	public Stadium getStad() {
		return stad;
	}
	public void setStad(Stadium stad) {
		this.stad = stad;
	}
	public Game() {}
	public Game( Date date, String equipe1, String equipe2) {
		
		this.date = date;
		this.equipe1 = equipe1;
		this.equipe2 = equipe2;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getEquipe1() {
		return equipe1;
	}
	public void setEquipe1(String equipe1) {
		this.equipe1 = equipe1;
	}
	public String getEquipe2() {
		return equipe2;
	}
	public void setEquipe2(String equipe2) {
		this.equipe2 = equipe2;
	}

}
