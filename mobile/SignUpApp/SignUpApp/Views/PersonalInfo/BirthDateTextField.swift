//
//  BirthDateTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class BirthDateTextField: UITextField {
    
    let datePicker = UIDatePicker()
    let accessoryView: UIView = {
        let view = UIView()
        view.frame = CGRect(x: 100, y: 100, width: view.frame.width, height: 100)
        view.backgroundColor = .lightGray
        return view
    }()
    
    let stackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.distribution = .fillEqually
        stackView.spacing = 8
        return stackView
    }()
    
    let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy년 MM월 dd일"
        return formatter
    }()
    
    private func generateButton(title: String, titleColor: UIColor?, weight: UIFont.Weight, selector: Selector) -> UIButton {
        let button = UIButton(type: .system)
        button.layer.cornerRadius = 12
        button.setTitleColor(titleColor, for: .normal)
        button.setTitle(title, for: .normal)
        button.titleLabel?.font = .systemFont(ofSize: 16, weight: .heavy)
        button.backgroundColor = .white
        button.addTarget(self, action: selector, for: .touchUpInside)
        return button
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        setupDatePicker()
        let selectButton = generateButton(title: "선택", titleColor: UIColor(named: "KeyColor"), weight: .heavy, selector: #selector(handleSelect))
        let cancelButton = generateButton(title: "취소", titleColor: nil, weight: .semibold, selector: #selector(handleCancel))
        stackView.addArrangedSubview(selectButton)
        stackView.addArrangedSubview(cancelButton)
        accessoryView.addSubview(stackView)
        setupConstraints()
        inputAccessoryView = accessoryView
    }
    
    private func setupDatePicker() {
        let calendar = Calendar(identifier: .gregorian)
        var components = DateComponents()
        components.calendar = calendar
        components.year = -15
        let maxDate = calendar.date(byAdding: components, to: Date())!
        components.year = -99
        let minDate = calendar.date(byAdding: components, to: Date())!
        datePicker.maximumDate = maxDate
        datePicker.minimumDate = minDate
        datePicker.datePickerMode = .date
        inputView = datePicker
    }
    
    private func setupConstraints() {
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.centerXAnchor.constraint(equalTo: accessoryView.centerXAnchor).isActive = true
        stackView.topAnchor.constraint(equalTo: accessoryView.topAnchor, constant: 8).isActive = true
        stackView.bottomAnchor.constraint(equalTo: accessoryView.bottomAnchor, constant: -8).isActive = true
        stackView.leadingAnchor.constraint(equalTo: accessoryView.leadingAnchor, constant: 8).isActive = true
        stackView.trailingAnchor.constraint(equalTo: accessoryView.trailingAnchor, constant: -8).isActive = true
    }
    
    @objc private func handleSelect() {
        let date = datePicker.date
        text = dateFormatter.string(from: date)
    }
    
    @objc private func handleCancel() {
        resignFirstResponder()
    }
}
