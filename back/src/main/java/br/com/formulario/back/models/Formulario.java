package br.com.formulario.back.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Formulario {
	
	@Id
	@JsonIgnore
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idFormulario;
	
	private String notaFiscal;
	private String dtReceb;
	private String oc1;
	private String oc2;
	private String oc3;
	private String fornecedor;
	private String comprador;
	private String conferente1;
	private String conferente2;
	private String apresCorreta;
	private String validCorreta;
	private String tempCorreta;
	private String loteCorreto;
	private String prodConservado;
	private String concCorreta;
	private String qtdDivergente;
	private String valorDivergente;
	private String prodControlado;
	private String prodTermolabil;
	private String status;
	private String nConformidade;
	
	public Formulario(Long idFormulario, String notaFiscal, String dtReceb, String oc1, String oc2, String oc3,
			String fornecedor, String comprador, String conferente1, String conferente2, String apresCorreta,
			String validCorreta, String tempCorreta, String loteCorreto, String prodConservado, String concCorreta,
			String qtdDivergente, String valorDivergente, String prodControlado, String prodTermolabil, String status,
			String nConformidade) {
		this.idFormulario = idFormulario;
		this.notaFiscal = notaFiscal;
		this.dtReceb = dtReceb;
		this.oc1 = oc1;
		this.oc2 = oc2;
		this.oc3 = oc3;
		this.fornecedor = fornecedor;
		this.comprador = comprador;
		this.conferente1 = conferente1;
		this.conferente2 = conferente2;
		this.apresCorreta = apresCorreta;
		this.validCorreta = validCorreta;
		this.tempCorreta = tempCorreta;
		this.loteCorreto = loteCorreto;
		this.prodConservado = prodConservado;
		this.concCorreta = concCorreta;
		this.qtdDivergente = qtdDivergente;
		this.valorDivergente = valorDivergente;
		this.prodControlado = prodControlado;
		this.prodTermolabil = prodTermolabil;
		this.status = status;
		this.nConformidade = nConformidade;
	}

	public Formulario() {
		
	}

	public Long getIdFormulario() {
		return idFormulario;
	}

	public void setIdFormulario(Long idFormulario) {
		this.idFormulario = idFormulario;
	}

	public String getNotaFiscal() {
		return notaFiscal;
	}

	public void setNotaFiscal(String notaFiscal) {
		this.notaFiscal = notaFiscal;
	}

	public String getDtReceb() {
		return dtReceb;
	}

	public void setDtReceb(String dtReceb) {
		this.dtReceb = dtReceb;
	}

	public String getOc1() {
		return oc1;
	}

	public void setOc1(String oc1) {
		this.oc1 = oc1;
	}

	public String getOc2() {
		return oc2;
	}

	public void setOc2(String oc2) {
		this.oc2 = oc2;
	}

	public String getOc3() {
		return oc3;
	}

	public void setOc3(String oc3) {
		this.oc3 = oc3;
	}

	public String getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(String fornecedor) {
		this.fornecedor = fornecedor;
	}

	public String getComprador() {
		return comprador;
	}

	public void setComprador(String comprador) {
		this.comprador = comprador;
	}

	public String getConferente1() {
		return conferente1;
	}

	public void setConferente1(String conferente1) {
		this.conferente1 = conferente1;
	}

	public String getConferente2() {
		return conferente2;
	}

	public void setConferente2(String conferente2) {
		this.conferente2 = conferente2;
	}

	public String getApresCorreta() {
		return apresCorreta;
	}

	public void setApresCorreta(String apresCorreta) {
		this.apresCorreta = apresCorreta;
	}

	public String getValidCorreta() {
		return validCorreta;
	}

	public void setValidCorreta(String validCorreta) {
		this.validCorreta = validCorreta;
	}

	public String getTempCorreta() {
		return tempCorreta;
	}

	public void setTempCorreta(String tempCorreta) {
		this.tempCorreta = tempCorreta;
	}

	public String getLoteCorreto() {
		return loteCorreto;
	}

	public void setLoteCorreto(String loteCorreto) {
		this.loteCorreto = loteCorreto;
	}

	public String getProdConservado() {
		return prodConservado;
	}

	public void setProdConservado(String prodConservado) {
		this.prodConservado = prodConservado;
	}

	public String getConcCorreta() {
		return concCorreta;
	}

	public void setConcCorreta(String concCorreta) {
		this.concCorreta = concCorreta;
	}

	public String getQtdDivergente() {
		return qtdDivergente;
	}

	public void setQtdDivergente(String qtdDivergente) {
		this.qtdDivergente = qtdDivergente;
	}

	public String getValorDivergente() {
		return valorDivergente;
	}

	public void setValorDivergente(String valorDivergente) {
		this.valorDivergente = valorDivergente;
	}

	public String getProdControlado() {
		return prodControlado;
	}

	public void setProdControlado(String prodControlado) {
		this.prodControlado = prodControlado;
	}

	public String getProdTermolabil() {
		return prodTermolabil;
	}

	public void setProdTermolabil(String prodTermolabil) {
		this.prodTermolabil = prodTermolabil;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getnConformidade() {
		return nConformidade;
	}

	public void setnConformidade(String nConformidade) {
		this.nConformidade = nConformidade;
	}	
	
	
}
