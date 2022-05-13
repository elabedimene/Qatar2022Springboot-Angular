package world.cup.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.*;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity
@Table(name = "Stadium")
public class Stadium {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	//@Column(name = "id")
	private long id;
	@Column(name = "address")
	private String address;
	@Column(name = "capacity")
	private long capacity;
	
	
    
 
	
	public Stadium(String address, long capacity) {
		
		this.address = address;
		this.capacity = capacity;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public long getCapacity() {
		return capacity;
	}



	public void setCapacity(long capacity) {
		this.capacity = capacity;
	}



	public Stadium () {}
	
}
