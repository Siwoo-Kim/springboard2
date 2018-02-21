package com.springboard.project.domain.converter;

import org.springframework.util.ObjectUtils;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class BooleanToYNConverter implements AttributeConverter<Boolean,String>{

    @Override
    public String convertToDatabaseColumn(Boolean attribute) {
        return (!ObjectUtils.isEmpty(attribute) && attribute) ? "Y" : "N";
    }

    @Override
    public Boolean convertToEntityAttribute(String dbData) {
        return "Y".equals(dbData);
    }
}
